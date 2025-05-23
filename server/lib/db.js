import mongoose from "mongoose";

//Function to connect to the Database
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    await mongoose.connect(`${process.env.MONDODB_URI}/chat-app`);
  } catch (error) {
    console.log(error.message);
  }
};
