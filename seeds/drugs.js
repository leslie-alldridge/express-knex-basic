exports.seed = function(knex, Promise) {
  return knex("drugs")
    .del()
    .then(function() {
      return knex("drugs").insert([
        // we are inserting an array of objects here
        { id: 1, name: "Panadol", price: 2 },
        { id: 2, name: "Iodine", price: 23 },
        { id: 3, name: "Bactroban", price: 53 }
      ]);
    });
};

// the above code pre-fills the database with this dummy data. Feel free to change it...but you'll need to
// run "yarn knex seed:run" again in the terminal for it to take effect
