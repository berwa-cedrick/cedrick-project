// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests.
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000, and IP address 127.0.0.1 (localhost)
const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
