
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('order_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_items').insert([
        {
          "order_id": 1,
          "menu_id": 1,
          "quantity": 1
        },
        {
          "order_id": 2,
          "menu_id": 4,
          "quantity": 2
        },
        {
          "order_id": 3,
          "menu_id": 23,
          "quantity": 3
        },
        {
          "order_id": 4,
          "menu_id": 55,
          "quantity": 4
        },
        {
          "order_id": 5,
          "menu_id": 1,
          "quantity": 5
        },
        {
          "order_id": 6,
          "menu_id": 44,
          "quantity": 6
        },
        {
          "order_id": 7,
          "menu_id": 2,
          "quantity": 7
        },
        {
          "order_id": 8,
          "menu_id": 9,
          "quantity": 8
        },
        {
          "order_id": 9,
          "menu_id": 77,
          "quantity": 9
        },
        {
          "order_id": 10,
          "menu_id": 23,
          "quantity": 10
        },
        {
          "order_id": 11,
          "menu_id": 65,
          "quantity": 11
        },
        {
          "order_id": 12,
          "menu_id": 23,
          "quantity": 12
        },
        {
          "order_id": 13,
          "menu_id": 26,
          "quantity": 13
        },
        {
          "order_id": 14,
          "menu_id": 36,
          "quantity": 14
        },
        {
          "order_id": 15,
          "menu_id": 32,
          "quantity": 15
        },
        {
          "order_id": 16,
          "menu_id": 88,
          "quantity": 16
        },
        {
          "order_id": 1,
          "menu_id": 99,
          "quantity": 17
        },
        {
          "order_id": 2,
          "menu_id": 55,
          "quantity": 18
        },
        {
          "order_id": 3,
          "menu_id": 33,
          "quantity": 19
        },
        {
          "order_id": 4,
          "menu_id": 22,
          "quantity": 20
        },
        {
          "order_id": 5,
          "menu_id": 11,
          "quantity": 21
        },
        {
          "order_id": 6,
          "menu_id": 13,
          "quantity": 22
        },
        {
          "order_id": 7,
          "menu_id": 75,
          "quantity": 23
        },
        {
          "order_id": 8,
          "menu_id": 34,
          "quantity": 24
        },
        {
          "order_id": 9,
          "menu_id": 90,
          "quantity": 25
        },
        {
          "order_id": 10,
          "menu_id": 134,
          "quantity": 26
        },
        {
          "order_id": 11,
          "menu_id": 123,
          "quantity": 27
        },
        {
          "order_id": 12,
          "menu_id": 230,
          "quantity": 28
        },
        {
          "order_id": 13,
          "menu_id": 155,
          "quantity": 29
        },
        {
          "order_id": 14,
          "menu_id": 144,
          "quantity": 30
        },
        {
          "order_id": 15,
          "menu_id": 133,
          "quantity": 31
        },
        {
          "order_id": 16,
          "menu_id": 122,
          "quantity": 32
        },
        {
          "order_id": 1,
          "menu_id": 156,
          "quantity": 33
        },
        {
          "order_id": 1,
          "menu_id": 157,
          "quantity": 34
        },
        {
          "order_id": 1,
          "menu_id": 158,
          "quantity": 35
        },
        {
          "order_id": 1,
          "menu_id": 159,
          "quantity": 36
        },
        {
          "order_id": 2,
          "menu_id": 53,
          "quantity": 37
        },
        {
          "order_id": 2,
          "menu_id": 53,
          "quantity": 38
        },
        {
          "order_id": 2,
          "menu_id": 52,
          "quantity": 39
        }
      ]);
    });
};
