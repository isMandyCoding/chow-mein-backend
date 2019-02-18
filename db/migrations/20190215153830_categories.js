exports.up = function (knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments();
        table.string("eng_category");
        table.string("ch_category");
        table.integer('section_id')
            .notNullable()
            .references('id')
            .inTable('menu_sections')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    })
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('categories')
};