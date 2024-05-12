import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Demande from "../../models/demande";
import { NextResponse } from 'next/server';
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
        // Get Owneremail from request parameters
        console.log("l email est :", email);
      
        const confirme = "false";
    
        const demandes = await Demande.find({ email,confirme });

        console.log(demandes, "validated");
        return NextResponse.json({ demandes }, { status: 200 });

        // Retrieve demands based on the query criteria
        

    } catch (error) {
        console.error(error);
        return NextResponse.error('Error retrieving demande', { status: 500 });
    }
}