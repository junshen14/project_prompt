import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongodb is already connected");
    return isConnected;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shared_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Mongo DB is connecting");
  } catch (error) {
    console.log(error);
  }
};
