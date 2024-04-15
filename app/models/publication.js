import mongoose, { Schema } from "mongoose";

const publicationSchema = new Schema({
  type: {
       type: String,
       required: true,
  },
  repas : {
    type: String,
    required: true,
},
spécialité: {
    type: String,
    required: true,
 
},
prix:{
    type: String,
    required: true,
},
bonpour:{
    type: String,
    required: true,
},
tunisiaStates:{
    type: String,
    required: true,
},
description:{
    type: String,
    required: true,
},
titre:{
    type: String,
    required: true,
},
ownerEmail:{
    type: String,
    required: true,
},

});

const Publication =
  mongoose.models.Publication || mongoose.model("Publication", publicationSchema);

export default Publication;