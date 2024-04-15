const fs = require('fs');

// data.json faylini o'qish
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Faylni o'qishda xatolik:", err)
    
  }

  // data.json faylidagi ma'lumotlar
  let existingData = JSON.parse(data);

  // Yangi ma'lumotlar
  const newData = [
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 60 },
    // ... boshqa ma'lumotlar
  ];

  // Eski ma'lumotlarga yangilarini qo'shish
  existingData = [...existingData, ...newData];

  // Yangi ma'lumotlarni JSON formatida qilish
  const jsonData = JSON.stringify(existingData, null, 2);

  // data.json fayliga yangi ma'lumotlarni yozish
  fs.writeFile('data.json', jsonData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Faylga yozishda xatolik:', writeErr);
    } else {
      console.log('Ma\'lumotlar data.json fayliga muvofiq o\'zgartirildi.');
    }
  });
});