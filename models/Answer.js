const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    text: { type: String, required: true },
    question: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Question',
    },
    user: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    approved: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.Model('Answer', answerSchema);
