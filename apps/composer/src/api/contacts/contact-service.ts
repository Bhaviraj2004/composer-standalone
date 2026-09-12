import prisma from "@/prisma";


export const ContactService = {
  async processBulkContacts(contacts: any[]) {
    const contactRecords = [];
    
    // Process contacts sequentially to avoid SQLite locking issues for now,
    // but in a real production PG DB, this should use bulk upserts (e.g. INSERT ... ON CONFLICT).
    for (const c of contacts) {
      if (!c.phone && !c.email && !c.lineId) continue;
      
      const phone = c.phone ? c.phone.trim() : null;
      const email = c.email ? c.email.trim() : null;
      const lineId = c.lineId ? c.lineId.trim() : null;
      
      const existing = await prisma.contact.findFirst({
        where: { OR: [{ phone: phone || '---' }, { email: email || '---' }, { lineId: lineId || '---' }] }
      });
      
      if (existing) {
        const contact = await prisma.contact.update({
          where: { id: existing.id },
          data: {
            firstName: c.firstName || existing.firstName,
            lastName: c.lastName || existing.lastName
          }
        });
        contactRecords.push(contact);
      } else {
        const contact = await prisma.contact.create({
          data: { phone, email, lineId, firstName: c.firstName, lastName: c.lastName }
        });
        contactRecords.push(contact);
      }
    }
    return contactRecords;
  }
};
