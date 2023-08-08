const Joi = require("joi");

const seller = Joi.object().keys({
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
  userName: Joi.string()
    .required()
    .min(4),
  shopName: Joi.string()
    .min(2)
    .required(),
  phone: Joi.number().min(4)
  // .required()
});

module.exports = seller;
