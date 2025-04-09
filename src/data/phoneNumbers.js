function generatePhoneNumbers(count) {
    const phoneNumbers = [];
    const prefixes = ['9', '8', '7'];
  
    for (let i = 0; i < count; i++) {
      let number = prefixes[Math.floor(Math.random() * prefixes.length)];
      for (let j = 0; j < 9; j++) {
        number += Math.floor(Math.random() * 10);
      }
      phoneNumbers.push(number);
    }
  
    return phoneNumbers;
  }
  
 export const phoneNumbers = generatePhoneNumbers(10000);