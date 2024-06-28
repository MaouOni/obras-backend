// config/sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',  // Specify the dialect (e.g., 'postgres')
    host: process.env.PG_HOST,  // Replace with your PostgreSQL host
    port: process.env.PG_PORT,  // Replace with your PostgreSQL port
    username: process.env.PG_USER,  // Replace with your PostgreSQL username
    password: process.env.PG_PASSWORD,  // Replace with your PostgreSQL password
    database: process.env.PG_DATABASE,  // Replace with your PostgreSQL database name
});

module.exports = sequelize;
