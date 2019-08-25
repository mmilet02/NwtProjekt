"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Trips", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      freespace: {
        type: Sequelize.INTEGER
      },
      start_hour: {
        type: Sequelize.STRING
      },
      end_hour: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        model: "users", // <<< Note, its table's name, not object name
        key: "id" // <<< Note, its a column name
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Trips");
  }
};
