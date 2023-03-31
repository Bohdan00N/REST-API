const express = require("express");

const ctrl = require("../../controllers/contacts");
require("dotenv").config();

const {
  addContactsSchema,
  updateFavoriteSchema,
} = require("../../schemas/contacts.js");

const router = express.Router();

const { validateBody } = require("../../utils");

const { isValidId } = require("../../middlewares");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(addContactsSchema), ctrl.addContact);

router.put(
  "/:id",
  isValidId,
  validateBody(addContactsSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", isValidId, ctrl.removeContact);

module.exports = router;
