const Buyer = require("../models/buyer");
const joiValidation = require("../validator/buyer");
const _ = require("lodash");
//TO CREATE A NEW BUYER

exports.create_a_new_buyer = async (req, res, nex) => {
  const { error, validation } = joiValidation.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(422).send("Invalid input");
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
  console.log(all_buyers);
  res.send(all_buyers);
};

//TO GET A SINGLE BUYER
