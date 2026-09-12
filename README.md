# Composer CRM (Standalone)

Composer is a comprehensive standalone CRM and bulk-messaging platform designed for WhatsApp, Instagram, and Facebook integrations. This project is structured as a **Monorepo** containing both the frontend dashboard and the backend services.

## 🚀 Project Structure

The project uses a monorepo architecture with the following main applications:

- **`apps/frontend`**: A modern React SPA built with Vite. It features a premium, high-contrast dark theme (Outfit font) and serves as the primary user interface.
- **`apps/composer`**: A powerful Node.js/Express backend that handles campaign scheduling, message processing, API integrations (OpenAI, Anthropic, Meta), and queue management (BullMQ & RabbitMQ).

## ✨ Key Features & Flow

### 1. Workspaces (Spaces)
**Flow**: Before a user can interact with the dashboard or create campaigns, they must create or select a **Space** (Workspace). 
- Spaces provide data isolation.
- Users can create a new space via the custom modal popup (requires Space Name and Contact Email).
- The active space is preserved in local storage and managed globally via React Context.

### 2. Dashboard Analytics
**Flow**: Once a space is selected, the user is greeted with a real-time dashboard.
- Displays high-level analytics: **Total Sent**, **Success Rate**, **Failed Messages**, and **Active Campaigns**.
- Shows a list of recent campaigns specific to the active Space.

### 3. Campaign Creation (Premium Flow)
**Flow**: Navigating to "New Campaign" opens a sleek, 2-column interface.
- **Left Column (Configuration)**: Users set the campaign name, select a platform (WhatsApp, Instagram, Facebook), input Meta access tokens, and write the message. It supports WhatsApp template logic and CSV contact uploads.
- **Right Column (Live Preview)**: As the user types their message and configures settings, a real-time mobile device simulator renders exactly how the message bubble will appear on the selected platform.

### 4. Campaign History & Reactivation
**Flow**: The "History" page acts as an archive for all past messaging activities.
- Users can view previous campaigns along with their delivery statistics and dates.
- Includes quick-action buttons to **Duplicate** or **Reactivate** a past campaign, making recurring broadcasts effortless.

### 5. Advanced Settings & Integrations
**Flow**: A dedicated configuration hub with side-tabs for managing external services.
- **General**: Timezone and company details.
- **API Keys**: Configure OpenAI and Anthropic keys for AI-assisted messaging features.
- **Meta Integrations**: Manage Facebook/Instagram/WhatsApp Access Tokens and Admin IDs.
- **Email / SMTP**: Configure custom SMTP hosts for email campaigns and notifications.

## 🛠️ How to Run the Project Locally

### Prerequisites
- Node.js (v18+)
- npm

### 1. Install Dependencies
Run the following command in the root directory to install dependencies for all workspaces:
```bash
npm install
```

### 2. Configure Environment Variables
Before starting the backend, make sure to configure the environment variables:
```bash
cd apps/composer
cp .env.sample .env
```
*(Edit the `.env` file and add your specific API keys, Redis ports, etc.)*

### 3. Start the Backend (Composer)
Open a terminal in the root folder, navigate to the backend, and start the development server:
```bash
cd apps/composer
npm run dev
```

### 4. Start the Frontend (UI Dashboard)
Open a new terminal tab in the root folder, navigate to the frontend, and start Vite:
```bash
cd apps/frontend
npm run dev
```
The frontend will typically be accessible at `http://localhost:5173`.
