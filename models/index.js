const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

// Define your associations here
User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Like);
Like.hasMany(User);


module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}