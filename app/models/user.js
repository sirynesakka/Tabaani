import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  id: {
       type: String,
       required: true,
       
    
  },
 name: {
    type: String,
    required: true,
 
},

   
 
selectedRole: {
    type: String,
    required: true,
 
},

});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;