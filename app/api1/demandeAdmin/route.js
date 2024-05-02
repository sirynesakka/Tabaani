import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
        await connectDB();

        // Retrieve all users
        const publications = await Publication.find({ confirmer: "x" });

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
    const publications = await Publication.find({ confirmer: "x" });
    return NextResponse.json({ message: "publication supprimé", publications }, { status: 200 });
  }