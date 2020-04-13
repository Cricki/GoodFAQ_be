const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
  title: { type: String, required: true },
  todos: [
    {
      todo: { type: String },
      result: { type: String },
    },
  ],
});

module.exports = mongoose.model('Template', templateSchema);
