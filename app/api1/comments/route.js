import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Comment from "../../models/comments";
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  const {
    pubclé,
    useremail,
    comment,
    rating,
    Owneremail,
  } = await req.json();
  
  const clé = uuidv4();
  // Définir manuellement la valeur de confirmer
  
  
  try {
    await connectDB();

    const err = await Comment.create({
        useremail,
        pubclé,
        comment,
        rating,
      clé, 
      Owneremail,// Utilisation de la valeur définie manuellement
    });
    console.log(err); 
    const comments = await Comment.find();
    return NextResponse.json({
      msg: ["Publication information saved successfully"],
      comments,
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
        const { searchParams } = new URL(request.url);
        const pubclé = searchParams.get('pubclé');
        // Retrieve all comments
        const comments = await Comment.find({pubclé});

        console.log(comments ,"validée")
        return NextResponse.json({ comments  }, {status:200});
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving users', { status: 500 });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Comment.findByIdAndDelete(id);
    const comments = await Comment.find();
    return NextResponse.json({ message: "commentaire supprimé", comments }, { status: 200 });
  }
  //