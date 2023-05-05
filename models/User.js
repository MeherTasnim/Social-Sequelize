const { db, DataTypes, Model} = require('../db/connection.js');
const { Sequelize } = require('sequelize');

// class User extends Model {}

// User.init(
//     {
//         username: DataTypes.STRING,
//         email: DataTypes.STRING
//     },
//     {
//         sequelize: db,
//         modelName: "User"
//     }
// );

let User = db.define('user', {
    username: Sequelize.STRING, 
    email: Sequelize.STRING 
});


module.exports = User;