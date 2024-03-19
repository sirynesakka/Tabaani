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
createAt: {
    type: String,
   
 
},
role: {
    type: String,
    
 
},

  date: {
    type: Date,
    default: Date.now,
  },
});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;