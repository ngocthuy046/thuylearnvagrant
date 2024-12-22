const { createServer } = require('node:http');

const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port,() => {
  console.log(`Server running at http://192.168.33.10:${port}/`);
});
