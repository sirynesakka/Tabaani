import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Demande from "../../models/demande";
import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
        await connectDB();

        // Retrieve demands where confirme is true
        const demandes = await Demande.find({ confirme: true });

        console.log(demandes, "validée");
        return NextResponse.json({ demandes }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.error('Error retrieving demande', { status: 500 });
    }
}