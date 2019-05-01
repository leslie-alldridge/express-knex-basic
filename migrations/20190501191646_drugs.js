exports.up = (knex, Promise) => {
  return knex.schema.createTable("drugs", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("price");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("drugs");
};
