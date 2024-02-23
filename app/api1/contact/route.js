import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });
    console.log(err);

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      err = error;
      console.log(err);
      NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}