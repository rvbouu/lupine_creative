const { Schema, model } = require('mongoose');

// Contact schema
const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true
  },
);

const Contact = model('contact', contactSchema);

module.exports = Contact;