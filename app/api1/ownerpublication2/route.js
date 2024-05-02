import connectDB from "../../lib/mongodb";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const ownerEmail = searchParams.get('ownerEmail');

    if (!ownerEmail) {
        return NextResponse.error('State parameter is missing', { status: 400 });
    }
    try {
        await connectDB();

        // Retrieve publications by owner email
        const publications = await Publication.find({ ownerEmail, confirmer:"confirmer" });

        return NextResponse.json({ publications }, { status: 200 });
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving publications', { status: 500 });
    }
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Publication.findByIdAndDelete(id);
    const publications = await Publication.find({confirmer:"confirmer"});
    return NextResponse.json({ message: "publication supprimé", publications }, { status: 200 });
  }