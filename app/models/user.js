import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  id: {
       type: String,
       required: true,
  },
 email: {
    type: String,
    required: true,
},
selectedRole: {
    type: String,
    required: false,
 
},
picture:{
  data: Buffer, // Store binary data
  contentType: String 
},

});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;