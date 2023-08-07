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

exports.seller_login = async (req, res, next) => {
  const login = {
    email: req.body.email,
    password: req.body.password
  };

  const checking_email = await Seller.findOne({ email: req.body.email });
  if (!checking_email) {
    return res.send(
      "sorry the email is not registerd check again or sign up rather"
    );
  }
  const verify_password = await Seller.findOne(login);

  if (!verify_password) {
    return res.send("incorrect password");
  }
  res.send("logged in successfull👍");
};

//TO GET ALL SELLERS
exports.get_all_sellers = async (req, res, next) => {
  const all_seller = await Seller.find();
  res.send(all_seller);
};
