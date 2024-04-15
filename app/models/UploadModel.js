// /src/db/models/UploadModel.js

import { Schema, model } from 'mongoose';

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
    required: true,
    
 
},
bucketName: {
    type: String,
    required: true,
    
 
},
});

const UploadModel = model('Upload', uploadSchema);

export default UploadModel;
