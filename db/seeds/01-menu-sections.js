
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_sections').insert([
        {
          "eng_section": "HONG KONG STYLE MENU",
          "ch_section": "HONG KONG STYLE MENU"
        },
        {
          "eng_section": "AZ Style Menu",
          "ch_section": "AZ Style Menu"
        }
      ]);
    });
};
