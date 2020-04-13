const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    { type: mongoose.Types.ObjectId, required: true, ref: 'Question' },
  ],
  template: { type: mongoose.Types.ObjectId, required: true, ref: 'Template' },
});

module.exports = mongoose.model('Category', categorySchema);
