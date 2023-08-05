const mongoose = require("mongoose");

// CONNECT TO DB
async function database() {
  try {
    mongoose.connect(
      // process.env.DB_CONNECT,
      "mongodb+srv://chidera:dandilion@cluster0.myzji2j.mongodb.net/"

      // () => console.log("connected to db")
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = database();
