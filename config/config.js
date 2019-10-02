module.exports = {
  development: {
    username: "express-db",
    password: "password",
    database: "express-db",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};
