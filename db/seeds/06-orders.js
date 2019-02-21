
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
          "customer_email": "email1@email.com",
          "customerPhoneNumber": "555-555-5555"
        },
        {
          "customer_name": "Nancy",
          "for_time": "ASAP",
          "from_guest": false,
          "customer_id": 2,
          "status_id": 2,
          "customer_email": "email2@email.com",
          "customerPhoneNumber": "555-555-5556"
        },
        {
          "customer_name": "Joe",
          "for_time": "1551441600000",
          "from_guest": true,
          "status_id": 3,
          "customer_email": "email3@email.com",
          "customerPhoneNumber": "555-555-5557"
        },
        {
          "customer_name": "Rico",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email4@email.com",
          "customerPhoneNumber": "555-555-5558"
        },
        {
          "customer_name": "Greg",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 1,
          "customer_email": "email5@email.com",
          "customerPhoneNumber": "555-555-5559"
        },
        {
          "customer_name": "Jun",
          "for_time": "1559390400000",
          "from_guest": false,
          "customer_id": 1,
          "status_id": 2,
          "customer_email": "email1@email.com",
          "customerPhoneNumber": "555-555-5560"
        },
        {
          "customer_name": "Eddie",
          "for_time": "ASAP",
          "from_guest": false,
          "customer_id": 2,
          "status_id": 3,
          "customer_email": "email2@email.com",
          "customerPhoneNumber": "555-555-5561"
        },
        {
          "customer_name": "Cindy",
          "for_time": "1559390400000",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email6@email.com",
          "customerPhoneNumber": "555-555-5562"
        },
        {
          "customer_name": "Mitch",
          "for_time": "1559390400000",
          "from_guest": true,
          "status_id": 1,
          "customer_email": "email7@email.com",
          "customerPhoneNumber": "555-555-5563"
        },
        {
          "customer_name": "John",
          "for_time": "1559390880000",
          "from_guest": true,
          "status_id": 2,
          "customer_email": "email8@email.com",
          "customerPhoneNumber": "555-555-5564"
        },
        {
          "customer_name": "Nick",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 3,
          "customer_email": "email6@email.com",
          "customerPhoneNumber": "555-555-5565"
        },
        {
          "customer_name": "Troy",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email7@email.com",
          "customerPhoneNumber": "555-555-5566"
        },
        {
          "customer_name": "Oscar",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 1,
          "customer_email": "email8@email.com",
          "customerPhoneNumber": "555-555-5567"
        },
        {
          "customer_name": "Lucas",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 2,
          "customer_email": "email6@email.com",
          "customerPhoneNumber": "555-555-5568"
        },
        {
          "customer_name": "Jeff",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 3,
          "customer_email": "email7@email.com",
          "customerPhoneNumber": "555-555-5569"
        },
        {
          "customer_name": "Jamie",
          "for_time": "ASAP",
          "from_guest": true,
          "status_id": 4,
          "customer_email": "email8@email.com",
          "customerPhoneNumber": "555-555-5570"
        }
      ]);
    });
};
