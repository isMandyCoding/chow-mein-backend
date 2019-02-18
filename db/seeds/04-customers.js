
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          "firstName": "Mandy",
          "lastName": "Everett",
          "email": "email1@email.com",
          "password": 12345
        },
        {
          "firstName": "Nancy",
          "lastName": "Drew",
          "email": "email2@email.com",
          "password": 12345
        }
      ]);
    });
};
