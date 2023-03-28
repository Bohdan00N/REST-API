const Joi = require("joi");
const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" must be exist`,
    "string.base": `"name" must be string`,
    "string.empty": `"name" cannot be empty`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" must be exist`,
    "string.base": `"email" must be string`,
    "string.empty": `"email" cannot be empty`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"number" must be exist`,
    "string.base": `"number" must be string`,
    "string.empty": `"number" cannot be empty`,
  }),
});
module.exports = {
  addSchema,
};
