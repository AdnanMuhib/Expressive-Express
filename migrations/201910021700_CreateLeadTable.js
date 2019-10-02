"use strict";
module.exports = {
  up: (queryinterface, Sequelize) => {
    return queryinterface.createTable("Leads", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryinterface, Sequelize) => {
    return queryinterface.dropTable("Leads");
  }
};
