const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageTimeSchema = new Schema({
  time: Number, 
  userId: String, 
  imageId: Number
});

const ImageTime = mongoose.model('ImageTime', ImageTimeSchema);
module.exports = ImageTime;
