import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    bio: String,
    profilePic: String,
  },
  {
    timestamps: { createdAt, updatedAt },
  }
);

const User = model("User", userSchema);

export default User;
