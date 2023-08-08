const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("TOKEN");
  if (!token) return res.status(401).send("access denied");

  try {
    const verified = jwt.verify(
      token,
      "ygsuVUagadvjwkfgvdbcyvwejkedfxngvbqhNAGShbsnvbbxvANSCBZxrequirerandomBytestoStringkjsgVzdxaj"
    );
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
  }
};
