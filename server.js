const http = require('http'); // node core module

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const server = http.createServer(({ headers, url, method }, res) => {
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');

  //   res.write('<h1>Hi Henry!</h1>');
  //   res.write('<h2>You are awesome!</h2>');

  // res.end(); // Không có thì bên client, quay vòng vòng hoài.
  res.end(JSON.stringify({ success: true, data: todos })); // có thể truyền cái cần trả về bằng param trực tiếp trong hàm end luôn.
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
