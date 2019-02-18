exports.up = function (knex, Promise) {
    return knex.schema.createTable('menu', table => {
        table.increments();
        table.string("eng_name");
        table.string("ch_name");
        table.text("description");
        table.integer("priceInCents");
        table.text("img_url");
        table.boolean("is_spicy")
        table.integer('category_id')
            .notNullable()
            .references('id')
            .inTable('categories')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('menu')
};
