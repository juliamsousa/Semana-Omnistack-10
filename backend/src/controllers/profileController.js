const connection = require ('../database/connection');

// responsavel pelo perfil de uma ong
module.exports = {
    async index (request, response) {
        // recebe a id passada pelo header da requisicao
        const ong_id = request.headers.authorization;

        try {
            // verifica se no banco de dados ha uma ong com o id passado
            const incidents = await connection('incidents')
                .where('ong_id', ong_id)
                .select('*');

            // retorna os incidentes cadastrados pela ong que contem o id de autenticacao passado
            return response.json(incidents);
        }
            catch (error) {
                console.log("Nao foi possivel buscar no banco", error);
                // retorno de erro, operacao nao autorizada
                return response.status(401).json({ error: 'Operation unauthorized' });
            }
    }
}