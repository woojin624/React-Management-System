const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    _id: { type: Number },
    id: { type: Number, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    birthday: { type: Number, required: true },
    gender: { type: String, required: true },
    job: { type: String, required: true },
  },
  {
    versionKey: false,
  },
  { collection: 'customers' }
);

customerSchema.set('collection', 'customers');

// get - Find All
customerSchema.statics.findAll = function () {
  // return promise
  return this.find({});
};

// post - Create new customer document
customerSchema.statics.create = function (payload) {
  // this === Model
  const customer = new this(payload);
  // return Promise
  return customer.save();
};

// delete - Delete by customersid
customerSchema.statics.deleteBycustomerid = function (customerid) {
  return this.remove({ id: parseInt(customerid) });
};

module.exports = mongoose.model('customers', customerSchema);
