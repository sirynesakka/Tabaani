import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
clé:{
    type: String,
    required: true,
 },
 pubclé:{
    type: String,
    required: true,
 },
useremail: {
       type: String,
       required: true,
  },
comment : {
    type: String,
    required: true,
},
rating: {
  type: String,
  required: true,
},


});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;