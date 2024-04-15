import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';

// GET function in api1/localisation.js
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const tunisiaState = searchParams.get('tunisiaStates');

        if (!tunisiaState) {
            return NextResponse.error('State parameter is missing', { status: 400 });
        }

        // Retrieve publications for the specified Tunisian state
        const publications = await Publication.find({ tunisiaStates: tunisiaState });

        // Map the publications to include the alt attribute for the image
        const publicationsWithAlt = publications.map(publication => ({
            ...publication.toObject(),
            alt: publication.tunisiaStates // You can customize the alt attribute as needed
        }));

        return NextResponse.json({ publications: publicationsWithAlt }, { status: 200 });
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving publications', { status: 500 });
    }
}
