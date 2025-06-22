export function up(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.date('date')
    table.integer('userId').references('users.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('orders')
}
