const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const requiredString = { type: String, required: true };

const userSchema = new Schema(
  {
    name: requiredString,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    image: { type: String },
    questions: [
      { type: mongoose.Types.ObjectId, required: true, ref: 'Question' },
    ],
    answers: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Answer' }],
    isAdmin: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
