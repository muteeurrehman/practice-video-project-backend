import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("DB_URI", process.env.DB_URI);
    const dbConnection = await mongoose.connect(
      `${process.env.DB_URI}/${process.env.DB_NAME}`,
    );
    console.log(
      `MongoDB connected successfully: ${dbConnection.connection.host}`,
    );
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
    // process.exit(1);
  }
};

export default connectDB;
