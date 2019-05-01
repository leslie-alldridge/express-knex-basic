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

// This file is the migrations, it tells the database hey we have a table you need to create, please add a table named drugs with
// the columns id (unique), name and price.

// if we roll back the migration (exports.down) then it will delete the table

// think of this as a saved checkpoint in a game, you can always fail and go back safely or continue forward
