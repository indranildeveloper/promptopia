import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_MONGO_URI
    : process.env.MONGO_URI;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDb is already connected!");
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      dbName: "promptopia",
    });

    isConnected = true;
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
  }
};
