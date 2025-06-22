export function up(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('imgUrl')
    table.decimal('price')
    table.text('description')
  })
}

export function down(knex) {
  return knex.schema.dropTable('products')
}
