

const http = require('http');
const url = require('url');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const chitkarDibo = () => {
  console.log('Chitkar Dibo');
};
eventEmitter.on('scream', chitkarDibo);
eventEmitter.emit('scream');

// const server = http.createServer((req, res) => {
//   // const address_url = 'http://localhost:5000/contact?name=shuvo&country=bd';
//   // const parsed_url = url.parse(address_url, true);
//   // const query = parsed_url.queryhost;
//   // console.log(query);

//   if (req.url === '/') { 
//     // fs.readFile('data.txt', (err, data) => {
//     //   if (err) {
//     //     res.writable('Failed to read data');
//     //     res.end();
//     //   }
//     //   else {
//     //     res.write(data);
//     //     res.end();
//     //   }
//     // });

//     // const data = fs.readFileSync('data.txt');
//     // res.write(data);
//     // res.end();

//     fs.writeFile('NewData.txt', "Hello I am removing you", (err) => {
//       if (err) {
//         res.write('Failed to write data');
//         res.end();
//       }
//       else {
//         res.write('Data written successfully');
//         res.end();
//       }
//     });

//   }

// });

// const PORT = 5000;
// server.listen(PORT);
// console.log(`Server is runnig at ${PORT}`);



// http.createServer((req, res) => {
//   // console.log(req.url);
//   if (req.url == '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Home</h1>');
//     res.end();
//   }
//   else if (req.url == '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>About</h1>');
//     res.end();
//   }
//   else if (req.url == '/contact') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Contact</h1>');
//     res.end();
//   }

//   // res.write('Hello World!se'); //write a response to the client
//   // res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

