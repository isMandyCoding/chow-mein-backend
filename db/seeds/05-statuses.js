
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {
          "status": "received"
        },
        {
          "status": "cooking"
        },
        {
          "status": "ready"
        },
        {
          "status": "completed"
        }
      ]);
    });
};
