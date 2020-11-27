import http from 'http';

const PORT = 8080;
const OK = 200;
const fakeBody = { name: 'Miguel' };
const logSever = () => console.log("Server run");

const webServer = http.createServer((request, response) => {
  response.statusCode = OK;
  response.end(JSON.stringify(fakeBody));
});

webServer.listen(PORT, () => logSever())
