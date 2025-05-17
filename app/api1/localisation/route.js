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

        // Define the confirmation status
        const confirmationStatus = searchParams.get('confirmationStatus');

        // Define the query based on confirmation status
        const query = confirmationStatus !== 'x' ?
            { tunisiaStates: tunisiaState, confirmer: { $ne: 'x' } } :
            { tunisiaStates: tunisiaState };

        // Retrieve publications based on the query
        const publications = await Publication.find(query);

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
