import mongoose from "mongoose";

const userModel = new mongoose.Schema( {
          firstName: {type: String, required: true},
          lastName: String,
          email: { type : String , unique : true, required : true },
          password: {type: String, required: true},
          role: {type: String, default: 'learner', enum: ['learner', 'instructor']},
        }, { collection: "users" });

export default mongoose.model("User", userModel);