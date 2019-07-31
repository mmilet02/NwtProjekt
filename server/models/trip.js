"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      freespace: DataTypes.INTEGER,
      start_hour: DataTypes.TIME,
      end_hour: DataTypes.TIME,
      location: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      image: DataTypes.STRING
    },

    {}
  );
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};
