export function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.integer('orderId').references('orders.id')
    table.integer('productId').references('products.id')
    table.integer('quantity')
  })
}

export function down(knex) {
  return knex.schema.dropTable('items')
}
