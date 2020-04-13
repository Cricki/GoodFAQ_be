const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    title: { type: String, required: true },
    question: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    answers: [
      {
        body: String,
        date: Date,
        user: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', questionSchema);
