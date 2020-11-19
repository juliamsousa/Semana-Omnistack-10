const connection  = require ('../database/connection');

module.exports = {
    async index (request, response) {
        // equivale a: SELECT * FROM TABLE INCIDENTS
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },

    async create (request, response) {
        const { title, description, value } = request.body;

        // o header de uma requisicao guarda dados do contexto da requisicao
        // como por exemplo dados de autenticacao, localizacao, idioma
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete (request, response) {
        // pega um parametro de rota
        const { id } = request.params;
        // console.log('id', id);

        // verifica se a ong que deseja apagar o dado esta autorizada
        const ong_id = request.headers.authorization;
        // console.log('ong_id', ong_id);

        // pega o id da ong que cadastrou o incidente solicitado
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        // console.log('foi buscado do banco', incident)
        
        /**
         * Fazer um try catch para verificacao de erros
         */
        
        // verifica se o id do header corresponde ao id da ong que cadastrou o dado
        if (incident.ong_id != ong_id) 
        {   
            // codigo http unauthorized
            return response.status(401).error({ error: 'Operation unauthorized' });
        }
        
        // apaga o dado
        await connection('incidents').where('id', id).delete();

        // resposta de sucesso sem conteudo dos status code
        return response.status(204).send();
    }
}