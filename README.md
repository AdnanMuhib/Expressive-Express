# Expressive-Express
Getting started with Express JS by following the [Express.js & Node.js Course for Beginners Crash Course of FreeCodeCamp.org](https://youtu.be/G8uL0lFFoN0)
- Implementation of CRUD design pattern
- Pug as template engine
- PostgreSql as database
- Sequelize for NodeJS as ORM
- Ajax calls for CRUD operations
- Making re-usable layout files in pug
- Styling the application using ``Bootstrap 4.3``
- Local auth strategy for login and signup using passport js
- Form input validation and form re-render with error messages using validator and lodash
- Implmentation of access control using a middleware in ExpressJS
- User admin based permission to access content
## Setup Guide
- Install ``Node >= v10.0``
- Install ``PostgresSQL``
- create new Role and database in ``PgAdmin``
- Update ``config/config.json`` with new database name, username and password
- Run ``npm install`` command from project root folder to install dependencies
- Run ``sequelize db:migrate`` to create db tables
- Run ``npm start`` to run the project on ``localhost:3000``

## Followed Development Steps

- Create Project using Express generator ``npx express-generator`` then ``express --view=pug myapp``
- install Sequelize using ``npm install sequelize --save`` and ``npm install pg --save``
- install sequelize cli globally using ``npm install sequelize-cli -g``
