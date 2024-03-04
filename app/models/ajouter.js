import mongoose, { Schema } from "mongoose";

const ajoutertSchema = new Schema({
  fName: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  lName: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  qName: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  message: {
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Ajouter =
  mongoose.models.Ajouter || mongoose.model("Ajouter", ajoutertSchema);

export default Ajouter;