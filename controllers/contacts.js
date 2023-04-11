const { ctrlWrapper } = require("../utils");

const contacts = require("../models/contacts");

const { HttpError } = require("../helpers");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const {page = 1, limit = 10} = req.query;
  const skip = (page - 1) * limit;
  const result = await contacts
    .find({ owner }, "-createdAt -updatedAt", {skip, limit})
    .populate("owner", "name email");
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.findById(id);
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contacts.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.findByIdAndUpdate(id, req.body);
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json(result);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json({
    message: "Contact removed",
  });
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  removeContact: ctrlWrapper(removeContact),
};
