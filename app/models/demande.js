import mongoose, { Schema } from "mongoose";

const demandeSchema = new Schema({
  nom: {
       type: String,
       required: true,
  },
  email : {
    type: String,
    required: true,
},
num: {
    type: String,
    required: true,
 
},
nombre:{
    type: String,
    required: true,
},
date:{
    type: String,
    required: true,
    
},
heure:{
  type: String,
  required: true,
},

});

const Demande =
  mongoose.models.Demande || mongoose.model("Demande", demandeSchema);

export default Demande;