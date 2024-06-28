require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// Ensure the port is a number
const port = parseInt(process.env.PG_PORT, 10);

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        port: port,
        dialect: 'postgres',
    }
);

module.exports = { sequelize, DataTypes };
