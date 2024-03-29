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

});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;