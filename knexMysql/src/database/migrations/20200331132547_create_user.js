exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.string('id').primary()
    table.string('name')
    table.string('email')
    table.string('password')
    table.string('whatsapp')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('user')
};
