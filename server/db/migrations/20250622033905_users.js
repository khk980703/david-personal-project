export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('password')
    table.string('phone')
    table.boolean('isAdmin')
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
