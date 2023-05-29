
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const welcomeSchema = new Schema({
Underscoreid:String , 


welcomeTitle:String 



})

module.exports = {
  Welcome : mongoose.model('welcome', welcomeSchema),
}

