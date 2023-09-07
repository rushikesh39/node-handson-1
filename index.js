const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/html'); // For HTML response
  // res.setHeader('Content-Type', 'application/json'); // For JSON response

  // Check the URL path to determine the route
  if (req.url === '/') {
    // Define the HTML and JSON data
    const htmlResponse = '<h1>Hello, Node.js Server!</h1>';
    const jsonResponse = { message: 'Hello from Node.js Server' };

    // Send the response based on the content type
    if (res.getHeader('Content-Type') === 'text/html') {
      res.end(htmlResponse);
    } else if (res.getHeader('Content-Type') === 'application/json') {
      res.end(JSON.stringify(jsonResponse));
    }
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
