
exports.up = function (knex) {
  return knex.schema.createTable('user_card', (table) => {
    table.increments('id')
    table.string('id_user').notNullable()
    table.integer('id_card').unsigned().notNullable()

    table.foreign('id_user').references('id').inTable('user')
    table.foreign('id_card').references('card.id')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_card')
};
