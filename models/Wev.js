
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wevSchema = new Schema({
Underscoreid:String , 


tile:String 



})

module.exports = {
  Wev : mongoose.model('wev', wevSchema),
}

