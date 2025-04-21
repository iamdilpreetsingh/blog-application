import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const commentSchema = new Schema(
  {
    postId: { type: ObjectId, required: true },
    userId: { type: ObjectId, required: true },
    content: String,
    parentCommentId: ObjectId,
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

export default Comment;
