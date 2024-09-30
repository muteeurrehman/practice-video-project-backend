import mongoose from "mongoose";

/**
 * Asynchronously connects to the MongoDB database using Mongoose.
 * 
 * This function attempts to establish a connection to the MongoDB database
 * using the URI and database name specified in the environment variables
 * `DB_URI` and `DB_NAME`. If the connection is successful, it returns the
 * database connection object. If the connection fails, it throws an error.
 * 
 * @async
 * @function connectDB
 * @returns {Promise<Object>} The Mongoose connection object.
 * @throws Will throw an error if the connection to the database fails.
 */
const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.DB_URI}/${process.env.DB_NAME}`,
    );
    return dbConnection;
  } catch (err) {
    throw err;
  }
};

export default connectDB;
