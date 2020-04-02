exports.up = function (knex) {
  return knex.schema.createTable('error', (table) => {
    table.increments()
    table.string('error', 500)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('error')
};
