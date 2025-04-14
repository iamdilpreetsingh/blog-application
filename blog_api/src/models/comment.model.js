import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    postId: { type: ObjectId, required: true },
    userId: { type: ObjectId, required: true },
    content: String,
    parentCommentId: ObjectId,
  },
  {
    timestamps: { createdAt },
  }
);

const Comment = model("Comment", commentSchema);

export default Comment;
