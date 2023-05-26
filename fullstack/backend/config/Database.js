import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false, // for reading from database
      },
    timezone: '+07:00', // for writing to database
});

export default db;