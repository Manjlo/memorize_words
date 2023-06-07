const fs = require('fs');

fs.readFile('assets/PALABRAS.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const words = data.split(/\s+/).filter(word => word.length < 15 && word.length > 4);
  words = words.slice(0, 20);
  console.log(words);
});
