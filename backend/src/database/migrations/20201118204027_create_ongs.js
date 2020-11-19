// npx knex migrate:make create_ongs
// cria a tabela e o historico de mudanças
exports.up = function(knex) {
    // cria a tabela
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// caso precisa voltar atras (desfazer o que for feito)
exports.down = function(knex) {
    // apaga a tabela
  return knex.schema.dropTable('ongs');  
};
