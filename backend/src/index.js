const express = require ('express');
const routes = require ('./routes');

const app = express();

// informar ao app que o corpo da requisicao utilizara o formato JSON
app.use(express.json());
app.use(routes); 

app.listen(3333);