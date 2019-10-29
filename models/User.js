const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  imageTimes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ImageTime'
    }
  ]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;