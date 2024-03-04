import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Ajouter  from "../../models/ajouter";;
import mongoose from "mongoose";



export async function POST(req) {
    const { fName, lName, qName, message } = await req.json();


    try {
        await connectDB();
       const res = await Ajouter.create({ fName, lName,qName , message });


    return NextResponse.json({
        msg: ["Message envoyé avec succès"],
        success: true,
      });
    }

    catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          let errorList = [];
          for (let e in error.errors) {
            errorList.push(error.errors[e].message);
          }
          console.log(errorList);
          return NextResponse.json({ msg: errorList });
        } else {
          return  NextResponse.json({ msg: ["Impossible d'envoyer le message"] });
        }
      }

} 
export async function GET(req) {
    try {
      await connectDB();
  
      const ajouter = await Ajouter.find();
  
      return NextResponse.json({
        ajouter,
        success: true,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ msg: ["Unable to retrieve contact data."], success: false });
    }}