# 🚀 Composer CRM - Complete Project Workflow & Guide

Namaste! Ye file aapko iss project (Composer CRM) ka poora flow, features aur modules ke baare mein simple language mein samjhayegi. Ise padhkar aapko idea lag jayega ki kya cheez kaise kaam kar rahi hai aur isko use karne ke liye kya zaroorat padegi.

---

## 🏗️ Project Structure (Modules Kaise Kaam Kar Rahe Hain?)

Ye ek **Monorepo** project hai (yani frontend aur backend dono ek hi jagah par hain).
Isme 2 main folders (apps) hain:

1. **`apps/frontend`**: Ye aapka UI/Dashboard hai. React aur Vite se bana hai. Jab aap website open karte ho toh yahi frontend dikhta hai. Isme saare pages (Dashboard, Campaign, History, Settings) shamil hain. CSV files read karne ke liye isme PapaParse jaisi library use hui hai.
2. **`apps/composer`**: Ye aapka Backend (Node.js/Express) hai. Ye module saara main kaam karta hai jaise messages bhejna, API calls karna (OpenAI, Meta), aur messages ki queue lagana (RabbitMQ & Redis ke through) taki aapka system crash na ho.

---

## 🔄 User Flow & Features (Kaunsa Feature Kya Kaam Karta Hai?)

System mein kaam karne ka seedha flow ye hai:

### Step 1: Workspaces (Spaces)
**Flow:** Sabse pehle user ko ek "Space" (Workspace) banana padta hai. Bina space ke aap dashboard ya koi doosra feature access nahi kar sakte.
- **Kya kaam karta hai:** Ye aapke data ko isolate karta hai. Agar aapke 2 alag business ya client hain, toh dono ke liye alag space bana sakte ho. 
- **Kaise use karein:** Jab aap site kholenge, ek popup aayega. Wahan "Space Name" aur "Email" daal kar space banayein.

### Step 2: Dashboard & Campaign Analytics
**Flow:** Space select/create karne ke baad aap Dashboard par aate ho. Kisi bhi campaign ki detail report dekhne ke liye uske "Analytics" page par ja sakte hain.
- **Kya kaam karta hai:** Dashboard par aapko overall live stats dikhte hain (Total Sent, Failed, Success Rate). "Campaign Analytics" page par aapko ek specific campaign ki deep-dive report milti hai (jaise kis number par message deliver hua aur kahan fail hua).

### Step 3: Campaign Creation (Message Bhejne Ka Tarika)
**Flow:** "New Campaign" wale page par jaakar aap bulk messages schedule ya send kar sakte ho. 
- **Kya kaam karta hai:** Isme 2 parts hote hain:
  - **Left Side (Settings):** Yahan aap platform (WhatsApp, Instagram, Facebook) select karte ho, credentials set karte ho aur apna message type karte ho. Aap yahan logo ke numbers ki CSV file bhi upload kar sakte ho bulk messaging ke liye.
  - **Right Side (Live Preview):** Ye ek live mobile simulator hai. Aap jo bhi message likhoge, wo real mobile phone par kaisa dikhega (WhatsApp ya Insta par), wo yahan live dikhega.

### Step 4: History & Reactivation
**Flow:** "History" page par aap purane chalae gaye campaigns dekh sakte ho.
- **Kya kaam karta hai:** Agar aapko koi purana offer ya message dubara bhejna hai, toh aapko naya campaign banane ki zaroorat nahi hai. Aap wahan se directly usko "Duplicate" ya "Reactivate" kar sakte ho.

### Step 5: Contacts Management (Segments)
**Flow:** "Contacts" page par jaakar aap apne saare customers/users ke number aur details ek jagah manage karte ho.
- **Kya kaam karta hai:** Baar-baar CSV upload karne ke bajaye, aap yahan contacts save kar sakte ho aur "Segments" (groups) bana sakte ho. Campaign banate waqt aap seedha "Contact Selector" se ye saved segments choose kar sakte hain.

### Step 6: Advanced Settings & Integrations
**Flow:** Settings page mein aakar aap apna system bahar ki external services se connect karte ho.
- **Kya kaam karta hai:** Yahan par aap basic cheezein (Timezone, Company info) aur sabse important apni API Keys configure karte ho.

---

## 📱 Platforms & Integrations Ko Kaise Use Karein? (Step-by-Step Guide)

Yahan alag-alag platforms (WhatsApp, Facebook, Instagram, Line, Email, SMS) par messages bhejne ka tareeka aur unka flow detail mein diya gaya hai:

### 1. WhatsApp (Bulk Messages)
- **Kahan se Setup karein:** Meta Developer Portal par jakar apne WhatsApp Business Account ka "Access Token" aur "Phone Number ID" copy karein. Ise system ki Settings > Meta Integrations mein daalna hota hai.
- **Kaise Use karein:** 
  1. "New Campaign" par click karein aur platform mein "WhatsApp" select karein.
  2. Apne WhatsApp Templates (jo pehle Meta se approve hote hain) me se ek template chunein.
  3. Ek CSV file upload karein jisme un logo ke mobile numbers (country code ke sath, bina + sign ke) hon jinhe aap message bhejna chahte hain. Aap CSV mein extra columns (jaise Name, Offer Code) bhi rakh sakte hain jinhe template mein use kiya ja sake.
  4. Apna campaign "Send" karein ya kisi specific time ke liye "Schedule" kar dein.

### 2. Facebook (Messenger)
- **Kahan se Setup karein:** Meta Business Suite mein apne Facebook Page ko connect karein, App banayein aur uska Access Token CRM ki Settings mein set karein.
- **Kaise Use karein:** 
  1. Campaign create karte waqt platform mein "Facebook" select karein.
  2. CSV file upload karein jisme users ki "PSID" (Page-Scoped ID) ho. (Note: Facebook par bulk message aam taur par aap unhi logo ko bhej sakte hain jinhone aapke page par pehle interaction/message kiya ho 24-hours window policy ke mutabiq, ya agar aapke paas special tag ho).
  3. Apna text, image ya button wala message type karein aur bhej dein.

### 3. Instagram (DM - Direct Messages)
- **Kahan se Setup karein:** Apne Instagram Professional account ko Facebook Page se link karein aur Meta dashboard se uska Token nikalkar CRM mein save karein.
- **Kaise Use karein:**
  1. Naya campaign banate waqt "Instagram" choose karein.
  2. Users ke IGSID (Instagram Scoped ID) ki list (CSV format) upload karein.
  3. Apna promotion ya update type karein. Right side (simulator) mein check karein ki ye Insta DM par kaisa dikhega, aur phir send button daba dein.

### 4. Line (Line Messaging API)
- **Kahan se Setup karein:** Line Developer Console par jakar ek "Messaging API" channel banayein. Wahan se "Channel Access Token" aur "Secret" copy karke apne system mein (Settings/env mein) save karein.
- **Kaise Use karein:**
  1. Campaign dashboard mein platform type "Line" select karein.
  2. Line users ke "User ID" ki list upload karein.
  3. Apna text ya rich media message design karein aur logo ko send kar dein.

### 5. Email (Bulk Mailer)
- **Kahan se Setup karein:** SMTP details (jaise SMTP Host, Port, Username, Password) `.env` file ya system ke Settings panel mein daalein. (Isme aap Gmail SMTP, Amazon SES, SendGrid, etc. use kar sakte hain).
- **Kaise Use karein:**
  1. Campaign mein platform type "Email" select karein.
  2. CSV upload karein jisme logo ki Email IDs (aur unka naam/details) ho. 
  3. Apna Email ka "Subject" aur "Body" likhein. Aap CSV variable tags ka use kar sakte hain (jaise `Hello {{Name}}, here is your discount!`). Right side mein mail ka preview dekhein aur send karein.

### 6. SMS (Text Messages)
- **Kahan se Setup karein:** Twilio, MessageBird, ya Fast2SMS jaisi kisi SMS gateway service par account banayein aur unka API key/Token CRM system mein integrate karein.
- **Kaise Use karein:**
  1. Campaign list se "SMS" option select karein.
  2. Phone numbers (with country code) ki CSV upload karein.
  3. Apna text message type karein (Dhyan rakhein ki standard SMS mein 160 characters ki limit hoti hai, lamba message 2 SMS mein count hoga). Phir campaign live kar dein.

### 7. Voice (Voice Broadcasting / Automated Calls)
- **Kahan se Setup karein:** Twilio ya Vonage jaisi Voice API service par account banayein. Wahan se apna API keys aur "From Number" copy karein aur Campaign setup karte time "Provider Config" mein JSON format mein set karein.
- **Kaise Use karein:**
  1. Campaign list se "Voice" select karein. Isme aap calls ko turant (Now) ya kisi time ke liye (Later) schedule kar sakte hain.
  2. Voice Provider select karke uski configuration JSON daalein.
  3. "Broadcast Content" mein 2 options milte hain: "Text-to-Speech" (Aap text likhenge aur system robot voice mein bolega) ya "Pre-recorded Audio" (Kisi MP3/WAV file ka link daalein).
  4. Apne Contacts (segment ya manual list) select karein aur "Launch Broadcast" par click kar dein. System automatically sabko call karna shuru kar dega!

---

## 🔑 Credentials Required (Kya Credentials Chahiye Use Karne Ke Liye?)

System chalane ke liye aur messages bhejne ke liye aapko kuch keys aur server details chahiye hongi. Ye sab aapko `apps/composer/.env` file mein daalni hongi:

1. **Meta (Facebook/Instagram/WhatsApp) Credentials:** 
   - Messages bhejne ke liye aapko Meta Developer portal se Access Tokens chahiye honge jisse system authorized tarike se message bhej paye.
2. **AI APIs (OpenAI / Anthropic Claude):**
   - **Kyun Use Ho Rahi Hai?** CRM mein bulk campaigns chalate waqt naye-naye promotional messages sochna aur likhna padta hai, isliye AI ka use "AI-Assisted Messaging" aur automation ke liye kiya jata hai.
   - **Kahan Kaam Aati Hai?** 
     - **AI Message Generation (Copywriting):** Campaign (WhatsApp, Email, FB, SMS) ka content, offer text ya subject line AI se automatically likhwane ke liye.
     - **Auto-Responder / Chatbot:** Agar koi user aapke WhatsApp ya FB message par reply karta hai, toh AI backend mein uske message ko samajhkar ek smart auto-reply dene ke kaam aata hai.
     - **Tone & Translation:** Aapke likhe huye message ki language ko aur professional (ya casual) banane, aur use dusri bhasha mein translate karne ke liye.
   - **Keys:** `COMPOSER_OPENAI_API_KEY` (ChatGPT ke liye) aur `COMPOSER_ANTHROPIC_KEY` (Claude AI ke liye).
3. **Database & Queues (Background processing ke liye):**
   - `COMPOSER_REDIS_PORT` (default 6379) aur `COMPOSER_REDIS_HOST`: Redis server details (messages ko queue mein rakhne ke liye BullMQ ke sath use hota hai).
   - `RABBITMQ_URL`: RabbitMQ ka URL messaging queue aur load manage karne ke liye.
   - `STRAPI_URL` & `COMPOSER_STRAPI_API_TOKEN`: CMS se data connect karne ke liye.
4. **Email/SMTP Credentials:**
   - Emails bhejne ke liye (notifications): `COMPOSER_SMTP_HOST`, `PORT`, `USER`, aur `PASS`.
5. **Basic System Variables:**
   - `COMPOSER_PORT` (e.g., 3020)
   - `COMPOSER_HOST` (e.g., localhost)
   - `COMPOSER_CORS_ORIGIN` (Frontend ko API access dene ke liye)

---

## 💻 System Kaise Start Karein? (How to Run Locally?)

1. **Install Dependencies:** Sabse pehle project ke main folder (`composer-standalone`) mein terminal open karein aur run karein:
   ```bash
   npm install
   ```

2. **Backend Start Karein:** 
   - Terminal mein type karein: `cd apps/composer`
   - `.env.sample` ko copy karke `.env` banayein aur apni details daalein.
   - Run karein: `npm run dev`

3. **Frontend Start Karein:** 
   - Ek naya terminal tab open karein.
   - Type karein: `cd apps/frontend`
   - Run karein: `npm run dev`
   - Iske baad browser mein `http://localhost:5173` kholen. Aapka CRM chal jayega!
