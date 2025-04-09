function generatePostalCodes(count) {
    const postalCodes = [];
  
    for (let i = 0; i < count; i++) {
      let code = Math.floor(Math.random() * 900000) + 100000; // ensures it's 6-digit, never starts with 0
      postalCodes.push(code.toString());
    }
  
    return postalCodes;
  }
export const postalCodes = generatePostalCodes(10000);