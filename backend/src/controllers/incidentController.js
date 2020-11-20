const connection  = require ('../database/connection');

module.exports = {

    // lista os incidents utilizando um sistema de paginacao
    async index (request, response) {
        // recebe o numero da pagina dos parametros da query
        const { page = 1} = request.query;

        // conta o numero total de incidentes contidos no banco
        const [totalCount] = await connection('incidents').count();

        // equivale a: SELECT * FROM TABLE INCIDENTS
        const incidents = await connection('incidents')
        // realaciona dados de duas tabelas
        // verifica se o id da ong na tabela ong equivale ao id de incidents
        // caso seja traz os dados
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        // limita a quantidade de dados que vem do banco
        .limit(5)
        // calcula a quantidade de dados que pula de pagina em pagina
        .offset((page-1)*5)
        .select
        // seleciona todos os itens da tabela incidentes 
        (['incidents.*', 
        // seleciona os itens necessarios da tabela ongs
        // isso evita que o id sobreponha o id do incidente
        'ongs.name', 
        'ongs.email', 
        'ongs.email', 
        'ongs.uf']);
        
        // retorna a conta total no cabecalho da resposta
        response.header('X-Total-Count', totalCount['count(*)']);

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

        // verifica se a ong que deseja apagar o dado esta autorizada
        const ong_id = request.headers.authorization;
        
        // pega o id da ong que cadastrou o incidente solicitado
        try {
                const incident = await connection('incidents')
                    .where('id', id)
                    .select('ong_id')
                    .first();

                // verifica se o id do header corresponde ao id da ong que cadastrou o dado
                if (incident.ong_id != ong_id) 
                    // codigo http unauthorized
                    return response.status(401).json({ error: 'Operation unauthorized' });
        }
            catch (error) {
                console.log("Nao foi possivel buscar o id no banco!", error);
                // retorno de erro, operacao nao autorizada
                return response.status(401).json({ error: 'Operation unauthorized' });
            }

        // apaga o dado
        await connection('incidents').where('id', id).delete();

        // resposta de sucesso sem conteudo dos status code
        return response.status(204).send();
    }
}