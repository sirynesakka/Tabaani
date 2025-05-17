import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Demande from "../../models/demande";
import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const Owneremail = searchParams.get('Owneremail');
        // Get Owneremail from request parameters
        console.log("l email est :", Owneremail);
        // Retrieve demands where confirme is true
        const confirme = "true";
        const demandes = await Demande.find({ Owneremail , confirme });

        console.log(demandes, "validée");
        return NextResponse.json({ demandes }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.error('Error retrieving demande', { status: 500 });
    }
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Demande.findByIdAndDelete(id);
    const demandes = await Demande.find({ confirme: true });
    return NextResponse.json({ message: "publication supprimé", demandes }, { status: 200 });
  }