# express-knex-basic

teaching material

Steps

1. Install yarn if you haven't got it already https://yarnpkg.com/en/ it's a package manager so you can easily download dependencies
2. navigate to the projects directory and type 'yarn' into the terminal (this installs all of the packages)
3. type the following

```
yarn knex migrate:latest
```

4. Now that you've run the database migrations, you can seed the database with dummy data
5. type the following

```
yarn knex seed:run
```

6. now the database is populated. You can view the data using db sqlite browser (https://sqlitebrowser.org/) and opening up the 'dev.sqlite3' file in your project folder.
