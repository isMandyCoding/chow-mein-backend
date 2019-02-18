
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          "customer_name": "Mandy",
          "for_time": "ASAP",
          "from_guest": false,
          "customer_id": 1,
          "status_id": 1,
          "customer_email": "email1@email.com"
        },
        {
          "customer_name": "Nancy",
          "for_time": "ASAP",
          "from_guest": false,
          "customer_id": 2,
          "status_id": 2,
          "customer_email": "email2@email.com"
        },
        {
          "customer_name": "Joe",
          "for_time": "1551440000000",
          "from_guest": true,
          "status_id": 3,
          "customer_email": "email3@email.com"
        },
        {
          "customer_name": "Rico",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email4@email.com"
        },
        {
          "customer_name": "Greg",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 1,
          "customer_email": "email5@email.com"
        },
        {
          "customer_name": "Jun",
          "for_time": "1559390000000",
          "from_guest": false,
          "customer_id": 1,
          "status_id": 2,
          "customer_email": "email1@email.com"
        },
        {
          "customer_name": "Eddie",
          "for_time": "ASAP",
          "from_guest": false,
          "customer_id": 2,
          "status_id": 3,
          "customer_email": "email2@email.com"
        },
        {
          "customer_name": "Cindy",
          "for_time": "1559390000000",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email6@email.com"
        },
        {
          "customer_name": "Mitch",
          "for_time": "1559390000000",
          "from_guest": true,
          "status_id": 1,
          "customer_email": "email7@email.com"
        },
        {
          "customer_name": "John",
          "for_time": "1559390000000",
          "from_guest": true,
          "status_id": 2,
          "customer_email": "email8@email.com"
        },
        {
          "customer_name": "Nick",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 3,
          "customer_email": "email6@email.com"
        },
        {
          "customer_name": "Troy",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email7@email.com"
        },
        {
          "customer_name": "Oscar",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 1,
          "customer_email": "email8@email.com"
        },
        {
          "customer_name": "Lucas",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 2,
          "customer_email": "email6@email.com"
        },
        {
          "customer_name": "Jeff",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 3,
          "customer_email": "email7@email.com"
        },
        {
          "customer_name": "Jamie",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email8@email.com"
        }
      ]);
    });
};
