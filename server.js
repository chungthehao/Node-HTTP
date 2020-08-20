const http = require('http'); // node core module

const server = http.createServer(({ headers, url, method }, res) => {
  console.log(headers, url, method);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
