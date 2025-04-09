export function generateEmailAddresses(userName) {
    const emails = [];
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "protonmail.com", "zoho.com"];
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const count = 10
  
    for (let i = 0; i < count; i++) {
      // let username = "";
      // const nameLength = Math.floor(Math.random() * 6) + 5; // username of 5-10 chars
  
      // for (let j = 0; j < nameLength; j++) {
      //   username += chars.charAt(Math.floor(Math.random() * chars.length));
      // }
  
      const domain = domains[Math.floor(Math.random() * domains.length)];
      const email = `${userName}${Math.floor(Math.random() * 1000)}@${domain}`;
      emails.push(email);
    }
    return emails;
  }