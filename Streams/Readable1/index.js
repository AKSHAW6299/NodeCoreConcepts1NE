const fs = require('fs');

const readableStream = fs.createReadStream('dummy.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('No more data');
});

readableStream.on('error', (err) => {
  console.error('Error:', err);
});
