import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    mainrole: {
      type: String,
      default: "user",
    },
    subscription: [
      {
        type: mongoose.Schema.Types.ObjectId, // vo course ka id joki user ne liya hai.isko simple id bhi rakh sakte the but objectid se hum subscription ko populate bhi kara sakte hai. 
        ref: "Courses", // means ye course kis collection se aaya hai uska reference.
      },
    ],
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", schema);
