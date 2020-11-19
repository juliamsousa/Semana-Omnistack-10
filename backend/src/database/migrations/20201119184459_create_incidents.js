// npx knex migrate:make create_incidents
// cria a tabela e o historico de mudanças
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        // chave primaria
        table.increments();

        // campos da tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // relacionamento
        table.string('ong_id').notNullable();

        // chave estrangeira 
        table.foreign('ong_id').references('id').inTable('ongs');});
};

// apaga a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
