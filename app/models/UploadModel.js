// /src/db/models/UploadModel.js

import mongoose, { Schema } from "mongoose";

const uploadSchema = new Schema({

    name: {
        type: String,
        required: true,
        
     
   },
 location: {
    type: String,
    required: true,
    
 
},
type: {
    type: String,
   
    
 
},
   

bucketName: {
    type: String,
    required: true,
    
 
},
});

const UploadModel = 
mongoose.models.UploadModel || mongoose.model('UploadModel', uploadSchema);

export default UploadModel;
