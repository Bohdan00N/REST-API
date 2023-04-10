const {Schema, model} = require('mongoose');

const {handleMongooseError} = require('../helpers');

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name of contact'],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
  type: Schema.Types.ObjectId,
  ref: "user",
  required: true,
  },
}, {versionKey:false, timestamps: true});

contactSchema.post('save', handleMongooseError);

const contacts = model('contact', contactSchema)

module.exports = contacts;
