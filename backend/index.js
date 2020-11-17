const express = require ('express');

const app = express();

app.get ('/', (require, response)=> {
    return response.json ({ teste: 'teste'})
})

app.listen(3333)

