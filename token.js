const jwt = require("jsonwebtoken");
const seller = require("./models/seller");
const buyer = require("./models/buyer");

exports.seller_token = async (req, res, next) => {
  const token = req.header("SELLER_TOKEN");
  if (!token) return res.send("access denied");
  try {
    const verify = await jwt.verify(
      token,
      "gfbvuyahjkdfbubhjanmdbsfsvdbhjansbdwjadgqtyuhfgbyuhegbfu"
    );
    req.seller = verify;
  } catch (err) {
    console.log("invalid token");
    res.send("invalid token");
  }
  const details = await seller.findOne(req.user._id);
  res.send(details);
};

exports.buyer_token = async (req, res, next) => {
  const token = req.header("BUYER_TOKEN");
  if (!token) return res.send("access denied");
  try {
    const verify = jwt.verify(
      token,
      "ygsuVUagadvjwkfgvdbcyvwejkedfxngvbqhNAGShbsnvbbxvANSCBZxrequirerandomBytestoStringkjsgVzdxaj"
    );
    req.user = verify;
  } catch (err) {
    res.send(err);
    console.log("invalid token");
    res.send("invalid token");
  }
  const detail = await buyer.findOne(req.user._id);
  res.send(detail);
};
