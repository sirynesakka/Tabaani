import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Demande from "../../models/demande";
import { NextResponse } from 'next/server';


export async function POST(req) {
    const {
     nom,
     email,
     num,
     nombre,
     date,
     heure,
    } = await req.json();
    try {
      await connectDB();
  
      const err = await Demande.create({
        nom,
        email,
        num,
        nombre,
        date,
        heure,
      });
      console.log(err); 
      const demandes = await Demande.find();
      return NextResponse.json({
        msg: ["Publication information saved successfully"],
        demandes,
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
        const demandes = await Demande.find();

        console.log(demandes ,"validée")
        return NextResponse.json({ demandes  }, {status:200});
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving demande', { status: 500 });
    }
}