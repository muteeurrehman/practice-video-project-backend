import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });


connectDB()
  .then((dbConnection) => {
    console.log(
      `MongoDB connected successfully: ${dbConnection.connection.host}`,
    );
    app.on("error", (error) => {
      console.error(`Express error: ${error}`);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to MongoDB ${err}`);
    process.exit(1);
  });
