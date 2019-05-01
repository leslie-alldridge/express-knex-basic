const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  getDrug,
  getDrugs
};

function getDrugs(testConn) {
  const conn = testConn || connection;
  return conn("drugs").select();
}

function getDrug(id, testConn) {
  const conn = testConn || connection;
  return conn("drugs")
    .where("id", id)
    .first();
}
