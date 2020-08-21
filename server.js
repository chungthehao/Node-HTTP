const http = require('http'); // node core module

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  ); // có thể truyền cái cần trả về bằng param trực tiếp trong hàm end luôn.
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
