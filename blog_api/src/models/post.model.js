import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

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
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

export default Post;
