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
        const publications = await Publication.find({ ownerEmail });

        return NextResponse.json({ publications }, { status: 200 });
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving publications', { status: 500 });
    }
}

export async function PUT(request) {
    const requestData = await request.json();

    const { clé } = requestData;

    try {
        await connectDB();

        // Find the publication by its clé
        const publication = await Publication.findOne({ clé });

        if (!publication) {
            return NextResponse.error('Publication not found', { status: 404 });
        }

        // Update the 'confirmer' field
        publication.confirmer = "confirmer";

        // Save the updated publication
        await publication.save();

        return NextResponse.json({ publication }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.error('Error updating publication', { status: 500 });
    }
}