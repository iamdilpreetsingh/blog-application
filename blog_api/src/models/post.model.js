import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, trim: true, ref: "User" },
    authorId: { type: ObjectId, required: true },
    tags: [String],
  },
  {
    timestamps: { createdAt },
  }
);

const Post = model("Post", postSchema);

export default Post;
