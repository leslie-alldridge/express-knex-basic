exports.seed = function(knex, Promise) {
  return knex("drugs")
    .del()
    .then(function() {
      return knex("drugs").insert([
        { id: 1, name: "Panadol", price: 2 },
        { id: 2, name: "Iodine", price: 23 },
        { id: 3, name: "Bactroban", price: 53 }
      ]);
    });
};
