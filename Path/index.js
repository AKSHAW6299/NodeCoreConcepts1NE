const path = require('path')
// const file = 'text/dummy.txt'

// A)
// **1) Resolve relative paths into an absolute path
// // If we have directory name and base name we can easily get absolute path!
// const absolutePath = path.resolve('test', 'dummy.txt');
// console.log(absolutePath);    // C:\ExperimentZone\Node\Path\test\dummy.txt
// console.log(path.isAbsolute(absolutePath));

// console.log(path.basename(absolutePath));   // dummy.txt
// console.log(path.dirname(absolutePath));    // C:\ExperimentZone\Node\Path\test
// console.log(path.extname(absolutePath));    // .txt
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// B)
// ** Both are [global constants] not part of [path module]
// Q) How to fild current file or current directory name?
// Very good for debuging when we have multiple file...
// console.log(__dirname);     //[C:\ExperimentZone\Node\Path]
// console.log(__filename);    //[C:\ExperimentZone\Node\Path\index.js]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// C)
// 1) Join path segments
const filePath = path.join(__dirname, 'test', 'dummy.txt');
console.log(filePath);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>s>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // D) Dynamic absolute path
const absPath = path.resolve('test')
console.log('abspath:: ', absPath);     // Upto directory name => [C:\ExperimentZone\Node\Path\test]
console.log('Dynamic absPath:: ', absPath+'/dummy.txt');       // [C:\ExperimentZone\Node\Path\test/dummy.txt]
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>s>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
