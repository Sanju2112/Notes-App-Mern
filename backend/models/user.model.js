const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const userSchema = new Schema({
    fullName:{type:String},
    email:{type:String},
    password:{type:String},
    createdOn:{type:Date, default:new Date().getTime()}
});

module.exports = mongooose.model('User', userSchema);