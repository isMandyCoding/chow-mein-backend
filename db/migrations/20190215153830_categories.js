exports.up = function (knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments();
        table.string("eng_category");
        table.string("ch-category");
        table.integer('section_id')
            .notNullable()
            .references('id')
            .inTable('menu-sections')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('categories')
};