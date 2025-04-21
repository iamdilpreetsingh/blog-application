import { compare, genSalt, hash } from "bcrypt";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    dateJoined: { type: Date, required: true, default: Date.now },
    lastLogin: { type: Date, required: false },
    bio: String,
    profilePic: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await genSalt(12);
    const hashedPassword = await hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (e) {
    return next(e);
  }
});

userSchema.methods.validatePassword = async function (candidatePassword) {
  const success = await compare(candidatePassword, this.password);
  return success;
};

const User = model("User", userSchema);

export default User;
