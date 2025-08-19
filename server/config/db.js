import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((error) => {
        console.error("MongoDB connection error:", error);
    });
}

export default db;
