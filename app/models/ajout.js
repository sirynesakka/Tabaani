import mongoose, { Schema } from "mongoose";

const ajoutSchema = new Schema({
  category: {
       type: String,
       required: true,
       
    
  },
 locationValue: {
    type: String,
    required: true,
 
},
category2: {
    type: String,
    required: true,
 
},
category3: {
  type: String,
  required: true,
  
        

},
category4: {
  type: String,
  required: true,
  

},
category5: {
  type: String,
  

},

imageSrc: {
  type: String,
  
},

  title: {
    type: String,
    
   
  },

  description: {
    type: String,
    
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Ajout =
  mongoose.models.Ajout || mongoose.model("Ajout", ajoutSchema);

export default Ajout;



