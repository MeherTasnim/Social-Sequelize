const { db, DataTypes, Model} = require('../db/connection.js');
const { Sequelize } = require('sequelize');

let Like = db.define('like', {
    reactionType: Sequelize.STRING,
    createdAt: Sequelize.STRING
});

module.exports = Like;