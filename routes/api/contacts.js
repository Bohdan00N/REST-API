const express = require("express");

const ctrl = require("../../controllers/contacts");

const schemas = require("../../schemas/contacts");

const router = express.Router();

const {validateBody} = require("../../utils");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
