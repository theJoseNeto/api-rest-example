'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('alunos',
     {
       id: {
         type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },

        firstname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },


      });

    },

  down: async (queryInterface) => {

    await queryInterface.dropTable('alunos');

  }
};
