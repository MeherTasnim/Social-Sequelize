const { db, DataTypes, Model} = require('../db/connection.js');
const { Sequelize } = require('sequelize');

class Comment extends Model {}

Comment.init(
    {
        body: DataTypes.STRING,
        createdAt: DataTypes.STRING
    },
    {
        sequelize: db,
        modelName: "Comment"
    }
);



module.exports = Comment;