exports.up = function (knex, Promise) {
    return knex.schema.createTable('orders', table => {
        table.increments();
        table.string("customer_name");
        table.string('for_time')
        table.boolean('from_guest')
            .defaultsTo('false')
        table.integer('customer_id')
            .references('id')
            .inTable('customers')
            .onDelete('CASCADE')
            .index();
        table.integer('status_id')
            .notNullable()
            .references('id')
            .inTable('statuses')
            .onDelete('CASCADE')
            .index();
        table.string('customer_email')
        table.timestamps(true, true);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('orders')
};