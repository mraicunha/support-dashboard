exports.up = function (knex) {
  return knex.schema.createTable('card', (table) => {
    table.increments('id').primary()
    table.string('header')
    table.string('body')
    table.string('footer')
    table.string('router').notNullable()
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('card')
};
