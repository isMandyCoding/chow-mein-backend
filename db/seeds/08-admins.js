
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {
          "firstName": "Owner",
          "lastName": "Ownerson",
          "email": "owneremail@email.com",
          "password": "password"
        },
        {
          "firstName": "Employee",
          "lastName": "Employeeson",
          "email": "employeeemail@email.com",
          "password": "password"
        },
        {
          "firstName": "Michael",
          "lastName": "Jordan",
          "email": "misterB@email.com",
          "password": "password"
        }
      ]);
    });
};
