const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello World!\n');
writableStream.write('Streaming data to a file.\n');
writableStream.end(() => {
  console.log('Finished writing to file');
});
