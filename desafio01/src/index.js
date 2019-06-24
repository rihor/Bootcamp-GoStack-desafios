const express = require("express");
const routes = require("./routes");
const server = express();

let numReq = 0;

// habilita o uso de json
server.use(express.json());

// middleware global que conta o número de requisições
server.use((req, res, next) => {
  next();
  numReq++;
  console.log(`Total de requisições feitas: ${numReq}`);
});

// usa as rotas definidas
server.use(routes);

server.listen(3000);
