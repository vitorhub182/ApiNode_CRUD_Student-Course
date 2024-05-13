const http = require('http'); // crio o serviço http
const app = require('./app'); // crio o serviço da aplicação 
const port = 3004; // defino a porta padrão // process.env.PORT ||
const server = http.createServer(app); // Crio o server e envio o app dentro desse server

server.listen(port); /* faço o server escutar na porta desejada 
                        envio para o server somente o que estiver sendo
                        exportado atraves do module.exports = app;
*/