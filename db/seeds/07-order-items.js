
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('order_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_items').insert([
        {
          "order_id": 1,
          "menu_id": 1
        },
        {
          "order_id": 2,
          "menu_id": 4
        },
        {
          "order_id": 3,
          "menu_id": 23
        },
        {
          "order_id": 4,
          "menu_id": 55
        },
        {
          "order_id": 5,
          "menu_id": 1
        },
        {
          "order_id": 6,
          "menu_id": 44
        },
        {
          "order_id": 7,
          "menu_id": 2
        },
        {
          "order_id": 8,
          "menu_id": 9
        },
        {
          "order_id": 9,
          "menu_id": 77
        },
        {
          "order_id": 10,
          "menu_id": 23
        },
        {
          "order_id": 11,
          "menu_id": 65
        },
        {
          "order_id": 12,
          "menu_id": 23
        },
        {
          "order_id": 13,
          "menu_id": 26
        },
        {
          "order_id": 14,
          "menu_id": 36
        },
        {
          "order_id": 15,
          "menu_id": 32
        },
        {
          "order_id": 16,
          "menu_id": 88
        },
        {
          "order_id": 1,
          "menu_id": 99
        },
        {
          "order_id": 2,
          "menu_id": 55
        },
        {
          "order_id": 3,
          "menu_id": 33
        },
        {
          "order_id": 4,
          "menu_id": 22
        },
        {
          "order_id": 5,
          "menu_id": 11
        },
        {
          "order_id": 6,
          "menu_id": 13
        },
        {
          "order_id": 7,
          "menu_id": 75
        },
        {
          "order_id": 8,
          "menu_id": 34
        },
        {
          "order_id": 9,
          "menu_id": 90
        },
        {
          "order_id": 10,
          "menu_id": 134
        },
        {
          "order_id": 11,
          "menu_id": 123
        },
        {
          "order_id": 12,
          "menu_id": 230
        },
        {
          "order_id": 13,
          "menu_id": 155
        },
        {
          "order_id": 14,
          "menu_id": 144
        },
        {
          "order_id": 15,
          "menu_id": 133
        },
        {
          "order_id": 16,
          "menu_id": 122
        },
        {
          "order_id": 1,
          "menu_id": 156
        },
        {
          "order_id": 1,
          "menu_id": 157
        },
        {
          "order_id": 1,
          "menu_id": 158
        },
        {
          "order_id": 1,
          "menu_id": 159
        },
        {
          "order_id": 2,
          "menu_id": 53
        },
        {
          "order_id": 2,
          "menu_id": 53
        },
        {
          "order_id": 2,
          "menu_id": 52
        }
      ]);
    });
};
