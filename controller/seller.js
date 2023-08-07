const Seller = require("../models/seller");
const _ = require("lodash");
const joiValidation = require("../validator/seller");

//TO CREATE A NEW SELLER
exports.create_new_seller = async (req, res, next) => {
  const { error, validation } = joiValidation.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(422).send(error.message);
  }
  const seller = new Seller(
    _.pick(req.body, [
      "firstName",
      "lastName",
      "password",
      "phone",
      "email",
      "shopName",
      "userName",
      "address"
    ])
  );
  try {
    const email = await Seller.findOne({ email: req.body.email });
    if (email) {
      return res.send("email already exists " + "try logging in rather");
    }
    const new_seller = await seller.save();
    console.log(new_seller);
    res.json(new_seller);
  } catch (err) {
    console.log(err.message);
  }
};
