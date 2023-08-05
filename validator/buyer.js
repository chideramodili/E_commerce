const Joi = require("joi");

const buyer = Joi.object().keys({
  firstName: Joi.string()
    .min(3)
    .max(20)
    .required(),
  lastName: Joi.string()
    .min(4)
    .max(20)
    .required(),
  password: Joi.string()
    .min(4)
    .max(40)
    .required(),
  email: Joi.string()
    .min(10)
    .required()
    .email(),
  address: Joi.string()
    .min(4)
    .required(),
  phone: Joi.number()
    .min(4)
    .required()
});

module.exports = buyer;
