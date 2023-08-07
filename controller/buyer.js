const Buyer = require("../models/buyer");
const joiValidation = require("../validator/buyer");
const _ = require("lodash");
//TO CREATE A NEW BUYER

exports.create_a_new_buyer = async (req, res, nex) => {
  const { error, validation } = joiValidation.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(422).send(error.message);
  }

  const buyer = new Buyer(
    _.pick(req.body, [
      "firstName",
      "lastName",
      "password",
      "phone",
      "address",
      "email"
    ])
  );

  const email = await Buyer.findOne({ email: req.body.email });
  if (email) {
    return res.send("email already exist");
  }

  const newBuyer = await buyer.save();
  console.log(newBuyer);
  res.json(`account created successefully for ${req.body.firstName}`);
};

//TO LOGIN INTO YOUR ACCOUNT
exports.login = async (req, res) => {
  const { error, validation } = joiValidation.validate(
    joiValidation.email,
    joiValidation.password
  );
  if (error) {
    console.log(error);
    return res.status(422).send("Invalid input");
  }
  const verification = await Buyer.findOne({
    email: req.body.email,
    password: req.body.password
  });
  if (!verification) {
    return res.send("login unsuccessful ");
  }
  res.send("logged in👍");
};

//TO GET ALL BUYERS
exports.get_all_buyers = async (req, res, next) => {
  const all_buyers = await Buyer.find({}).sort({ data: -1 });
  res.send(all_buyers);
};

//TO GET A SINGLE BUYER
exports.get_a_single_buyer = async (req, res, next) => {
  const buyer = await Buyer.findById(req.params.buyerId);
  res.send(buyer);
};

//TO DELETE AN ACCOUNT OR A BUYER
exports.delete_buyer = async (req, res, next) => {
  const account = {
    email: req.body.email,
    password: req.body.password
  };
  const verify_account = await Buyer.findOne({ email: req.body.email });
  if (!verify_account) {
    return res.status(400).send("sorry the email does not match");
  }
  const verify_password = await Buyer.findOne(account);
  if (!verify_password) {
    return res.send("incorrect password");
  } else {
    const acc_to_delete = await Buyer.findOneAndDelete(account);
    res.json(acc_to_delete);
  }
};

//TO EDIT A  BUYER ACCOUNT

exports.edit_buyer = async (req, res, nsxt) => {
  const account = {
    email: req.body.email,
    password: req.body.password
  };
  const verify_account = await Buyer.findOne(account);
  if (!verify_account) {
    return res.status(400).send("not an account");
  }
  const update = await Buyer.findOneAndUpdate({
    $set: {
      firstName: req.body.newfirstName,
      lastName: req.body.newlastName,
      email: req.body.newemail,
      password: req.body.newpassword,
      phone: req.body.newphone,
      address: req.body.newaddress
    }
  });

  res.json(update);
};
