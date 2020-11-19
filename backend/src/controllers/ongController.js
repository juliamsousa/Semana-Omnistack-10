const connection = require('../database/connection');
// pacote do node utilizado para criptografia
// nesse caso é utilizado para gerar o id dos dados no banco
const crypto = require('crypto');

module.exports = {

    async index (request, response) {
        // equivale a: SELECT * FROM TABLE ONGS
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create (request, response) {
        // pega os dados do corpo da requisicao por meio da desestruturacao
        const {name, email, whatsapp, city, uf} = request.body;

        // gera 4 bytes randomicos convertidos para string do tipo hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');

        // faz a conexao e insercao dos dados no background_color
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        // retorna o id da ong cadastrada
        return response.json({id});
    }
}