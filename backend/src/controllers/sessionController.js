const connection = require ('../database/connection');

module.exports = {
    // verificara se a ong exist no banco
    async create (request, response) {
        // pega o id passado no corpo da requisicao
        const { id } = request.body;

        try {
            // seleciona o nome da ong que possui o id passado no header da requisicao
            const ong = await connection('ongs')
                .where('id', id)
                .select('name')
                .first();

            // retorna a ong buscada no banco
            return response.json(ong);
            
        }
            catch (error) {
                // mesagem de erro com status bad request
                return response.status(400).json({ error: "No ONG found matching the requested id" });
            }
    }
}