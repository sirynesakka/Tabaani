import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Ajout  from "../../models/ajout";;
import mongoose from "mongoose"; 



export async function POST(request) {
    const { category,
      location,
      category2,
      category3,
      category4,
      category5,
      imageSrc,
      title,
      description, 
         } = await request.json();


try{
  await connectDB();
  const res = await Ajout.create({ 
    category,
    locationValue: location.value,
    category2,
    category3,
    category4,
    category5,
    imageSrc,
    title,
    description,});
 
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

export async function GET() {
  try {
    await connectDB();
    const ajout = await Ajout.find();
    console.log(ajout, "validated");
    return NextResponse.json({ ajout }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}


