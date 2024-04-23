import mongoose, { Schema } from "mongoose";

const demandeSchema = new Schema({
  clé:{
    type: String,
    required: true,
 },
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

confirme: {
  type: Boolean,
  default: false, // Par défaut, la demande n'est pas confirmée
},


});

const Demande =
  mongoose.models.Demande || mongoose.model("Demande", demandeSchema);

export default Demande;