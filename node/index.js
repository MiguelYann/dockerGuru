
import http from 'http';

const serverWeb = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end(JSON.stringify({name : "Miguel"}))
})


serverWeb.listen(8080, () => console.log("Server run"));
