const mongoose = require("mongoose");

// coonexion a notre base de donnée mongo
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI, () =>
      console.log("mongo connecté")
    );
  } catch (error) {
    console.log(error);
    process.exit;
  }
};

module.exports = connectDB;
