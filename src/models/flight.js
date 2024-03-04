'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {

    static associate(models) {
      this.belongsTo(models.Airplane, {

        foreignKey: 'airplaneID',
        as: 'airplaneDetails'


      });

      this.belongsTo(models.Airport, {

        foreignKey: 'departureAirportID',
        as: 'departureAirport'


      });
      this.belongsTo(models.Airport, {

        foreignKey: 'arrivalAirportID',
        as: 'arrivalAirport'


      });
    }
  }
  Flight.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airplaneID: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    departureAirportID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrivalAirportID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate: {
      type: DataTypes.STRING,

    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};