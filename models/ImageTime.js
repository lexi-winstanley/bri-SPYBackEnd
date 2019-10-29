const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageTimeSchema = new Schema({
  body: String
});

const ImageTime = mongoose.model('ImageTime', ImageTimeSchema);
module.exports = ImageTime;
