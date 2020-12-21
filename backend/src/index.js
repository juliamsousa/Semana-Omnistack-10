const express = require ('express');
const cors = require ('cors');
// importa as rotas criadas 
const routes = require ('./routes');

const app = express();

// informar ao app que o corpo da requisicao utilizara o formato JSON
app.use(express.json());
app.use(cors());
// diz ao app para utilizar as rotas criadas
app.use(routes); 

// define que o app servira na porta 3333
app.listen(3333);
