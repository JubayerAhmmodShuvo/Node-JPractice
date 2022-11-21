const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');

readStream.on('data', (chunk) => {
  console.log('======================');
  console.log(chunk);
});

readStream.on('open', () => {
  console.log('File is open');
});

setTimeout(() => {
  readStream.pause();
  console.log("Straming is paused now");
}, 15);

setTimeout(() => { 
  readStream.resume();
  console.log("Straming is resumed now");
},8000);



