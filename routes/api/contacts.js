const express = require("express");

const ctrl = require("../../controllers/contacts");
require("dotenv").config();

const {
  addContactsSchema,
  updateFavoriteSchema,
} = require("../../schemas/contacts.js");

const router = express.Router();

const { validateBody } = require("../../utils");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(addContactsSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addContactsSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
