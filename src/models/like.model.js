import mongoose, {Schema} from "mongoose";

const likeSchema = new Schema({
    liked: {
        type: Boolean,
        default: true,
      },
    Comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    Video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    }
},
{
    timestamps: true
})
export const Like = mongoose.model("Like",likeSchema)