const { Sequelize } = require('sequelize')
const CrudRepository = require('./crud-repository')
const db = require('../models')
const { addRowLockOnFlights } = require('./queris')
const { Flight, Airplane, Airport, City } = require('../models')

class FlightRepository extends CrudRepository {

      constructor() {
            super(Flight);

      }


      async getAllFlights(filter, sort) {

            const response = await Flight.findAll({
                  where: filter,
                  order: sort,

                  include: [
                        {
                              model: Airplane,
                              required: true,
                              as: 'airplaneDetails'
                        },
                        {
                              model: Airport,
                              required: true,
                              as: 'departureAirport',
                              on: {
                                    col1: Sequelize.where(Sequelize.col("Flight.departureAirportID"), "=", Sequelize.col("departureAirport.code")),
                              },
                              include: [
                                    {
                                          model: City,
                                          required: true,
                                    }
                              ]

                        },
                        {
                              model: Airport,
                              required: true,
                              as: 'arrivalAirport',
                              on: {
                                    col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportID"), "=", Sequelize.col("arrivalAirport.code")),
                              },

                              include: [
                                    {
                                          model: City,
                                          required: true,
                                    }
                              ]


                        }


                  ]
            });
            return response;
      }




      async updateRemainingSeats(flightID, seats, dec = true) {

            const transaction = await db.sequelize.transaction();
            try {
                  await db.sequelize.query(addRowLockOnFlights(flightID));
                  const flight = await Flight.findByPk(flightID);

                  if (+dec) {

                        await flight.decrement('totalSeats', { by: seats }, { transaction: transaction });


                  }
                  else {
                        await flight.increment('totalSeats', { by: seats }, { transaction: transaction });



                  }

                  await transaction.commit();
                  return flight;

            } catch (error) {

                  await transaction.rollback();
                  throw error;

            }



      }

}

module.exports = FlightRepository;