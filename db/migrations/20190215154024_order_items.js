exports.up = function (knex, Promise) {
    return knex.schema.createTable('order_items', table => {
        table.increments();
        table.integer('order_id')
            .notNullable()
            .references('id')
            .inTable('orders')
            .onDelete('CASCADE')
            .index();
        table.integer('menu_id')
            .notNullable()
            .references('id')
            .inTable('menu')
            .onDelete('CASCADE')
            .index();
        table.integer("quantity")
        table.timestamps(true, true);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('order_items')
};