const { db, DataTypes, Model} = require('../db/connection.js');
const { Sequelize } = require('sequelize');


let Post = db.define('post', {
    title: Sequelize.STRING, 
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
});




module.exports = Post;