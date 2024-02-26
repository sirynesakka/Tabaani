import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      const connex = await mongoose.connect(process.env.MONGODB_URI, {
        pass: "Tabaani-password",
        dbName: "Tabaani",
        user: "Tabaani-dev",
      });
      console.log("db connected" );
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;