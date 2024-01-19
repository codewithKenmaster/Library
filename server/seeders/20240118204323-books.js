"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        name: "V for Vendetta",
        author: "Alan Moore",
        year_published: "1992",
      },
      {
        name: "Don Quijote",
        author: "No me Acuerdo",
        year_published: "1974",
      },
      {
        name: "The Crow",
        author: "Edgar Allan Poe",
        year_published: "1815",
      },
      {
        name: "Maria Chusema",
        author: "Puerto Rico",
        year_published: "1995",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};

//use sequelize db:seed:all to send the dummy data to db.
//export must be exactly as named of the table.
