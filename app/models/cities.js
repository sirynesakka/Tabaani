import mongoose, { Schema } from "mongoose";

const citiesSchema = new Schema({
  name: {
       type: String,
       required: true,
  },
 

});

const Cities =
  mongoose.models.cities || mongoose.model("cities", citiesSchema);

export default Cities;