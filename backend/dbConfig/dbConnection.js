import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URL);
    console.log("dbConnection", dbConnection);

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Error: " + error);
  }
};

export default dbConnection;
