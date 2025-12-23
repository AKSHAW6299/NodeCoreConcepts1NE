const fs = require('fs')

// 1) CREATE file
fs.writeFileSync("dummy.txt", "Hi, my name is Rohit...")
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1');

// 2) READ file
const data1 = fs.readFileSync('dummy.txt', 'utf-8')
console.log('File content1:: ', data1);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2');

// 3) UPDATE file
fs.appendFileSync('dummy.txt', '\n I am learning Node.js...')
console.log('File updated!');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>3');

// 4) Reading the file after update!
const data2 = fs.readFileSync('dummy.txt', 'utf-8')
console.log('File content2:: ', data2);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>4');

// 5) DELETE file
fs.unlinkSync('dummy.txt')
console.log('File deleted!');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>5');