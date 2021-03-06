const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  // we export so we can call these functions over in routes.js above
  getDrug,
  getDrugs,
  saveDrug
};

function getDrugs(testConn) {
  const conn = testConn || connection;
  return conn("drugs").select(); //get me all of the entries in the database (returns an array of objects)
}

function getDrug(id, testConn) {
  const conn = testConn || connection;
  return conn("drugs")
    .where("id", id)
    .first(); // return me the first item matching a particular ID (my example doesn't use this yet, but it's good to know)
}

function saveDrug(drug, testConn) {
  const conn = testConn || connection;
  return conn("drugs")
    .insert(drug) // save an entry into the database -> this only returns a number to say yep i've saved it in a particular index
    .then(data => {
      return conn("drugs").select(); // because of this, we need to return the entire database :)
    });
}
