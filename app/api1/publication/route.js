import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  const {
    type,
    repas,
    spécialité,
    prix,
    bonpour,
    tunisiaStates,
    titre,
    description,
    ownerEmail,
    confirmer,
  } = await req.json();
  
  const clé = uuidv4();
  // Définir manuellement la valeur de confirmer
  
  
  try {
    await connectDB();

    const err = await Publication.create({
      type,
      repas,
      spécialité,
      prix,
      bonpour,
      tunisiaStates,
      titre,
      description,
      ownerEmail,
      confirmer,
      clé, // Utilisation de la valeur définie manuellement
    });
    console.log(err); 
    const publications = await Publication.find();
    return NextResponse.json({
      msg: ["Publication information saved successfully"],
      publications,
      success: true,
    });
  } catch (error) {
    let err;
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for(let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      err = error;
      console.log(err);
      return NextResponse.json({ msg: ["Unable to save user information."] });
    }
  }
}

  export async function GET(request) {
    try {
        await connectDB();

        // Retrieve all users
        const publications = await Publication.find({ confirmer: "confirmer" });

        console.log(publications ,"validée")
        return NextResponse.json({ publications  }, {status:200});
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving users', { status: 500 });
    }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Publication.findByIdAndDelete(id);
  const publications = await Publication.find();
  return NextResponse.json({ message: "publication supprimé", publications }, { status: 200 });
}