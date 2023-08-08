const Seller = require("../models/seller");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
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
  // TO CREATE AND ASSIGN TOKEN
  const token = jwt.sign({ _id: Seller._id }, process.env.JWT_TOKEN);
  res.send("logged in successfull👍");
};

//TO GET ALL SELLERS
exports.get_all_sellers = async (req, res, next) => {
  const all_seller = await Seller.find();
  res.send(all_seller);
};

//TO GET A SINGLE SELLER
exports.get_a_single_seller = async (req, res, next) => {
  const one_seller = await Seller.findById(req.params.sellerId);
  if (!one_seller) {
    return res.send("not a user check the id again and try again");
  }
  res.send(one_seller);
};

//TO EDIT A SELLER ACCOUNT
exports.edit_seller = async (req, res, next) => {
  const account = {
    email: req.body.email,
    password: req.body.password
  };
  const verify_account = await Seller.findOne({ email: req.body.email });
  if (!verify_account) {
    return res.status(400).send("wrong email");
  }
  const verify_password = await Seller.findOne(account);
  if (!verify_password) {
    return res.send("wrong password");
  }
  const update = await Seller.findOneAndUpdate({
    $set: {
      firstName: req.body.newfirstName,
      lastName: req.body.newlastName,
      email: req.body.newemail,
      password: req.body.newpassword,
      phone: req.body.newphone,
      shopName: req.body.newshopName,
      userName: req.body.newuserName,
      address: req.body.newaddress
    }
  });
  console.log(update);
  res.json(update);
};

exports.delete_seller = async (req, res, next) => {
  const account = {
    email: req.body.email,
    password: req.body.password
  };
  const verify_account = await Seller.findOne({ email: req.body.email });
  if (!verify_account) {
    return res.status(400).send("wrong email");
  }
  const verify_password = await Seller.findOne(account);
  if (!verify_password) {
    return res.send("wrong password or emaill pls check and try again");
  }
  const delete_acc = await Seller.findOneAndDelete(account);
  res.send(delete_acc);
};
