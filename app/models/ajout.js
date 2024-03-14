import mongoose, { Schema } from "mongoose";

const ajoutSchema = new Schema({
  category: {
       type: String,
    
  },
 locationValue: {
    type: String,
 
},
category2: {
    type: String,
 
},
category3: {
  type: String,
  
        

},
category4: {
  type: String,
  

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



