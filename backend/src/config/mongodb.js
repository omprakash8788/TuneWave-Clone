import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected to database");
  });
//   await mongoose.connect(`${process.env.mongodb_url}/tunewave`);
   await mongoose.connect(`${process.env.mongodb_url}/tunewave`)
};

export default connectDB;
