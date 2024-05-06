import connectDB from "../../lib/mongodb";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';

// GET function in api1/localisation.js
export async function GET(request) {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const tunisiaState = searchParams.get('tunisiaStates');

        if (!tunisiaState) {
            console.error('State parameter is missing');
            return NextResponse.error('State parameter is missing', { status: 400 });
        }

        // Define the confirmation status
        const confirmationStatus = searchParams.get('confirmationStatus');

        console.log('Received request with parameters:');
        console.log('tunisiaState:', tunisiaState);
        console.log('confirmationStatus:', confirmationStatus);

        // Construct the initial query based on the parameters
        let query = { tunisiaStates: tunisiaState };
        if (confirmationStatus !== 'x') {
            query.confirmer = { $ne: 'x' };
        }

        console.log('Executing initial query:', query);

        // Retrieve publications based on the initial query
        let publications = await Publication.find(query);

        console.log('Retrieved publications:', publications);

        // If additional filters are provided, apply them
        const type = searchParams.get('type');
        const repas = searchParams.get('repas');
        const specialite = searchParams.get('specialite');
        const bonpour = searchParams.get('bonpour');
        const prix = searchParams.get('prix');

        // Add additional filters if present
        if (type) {
            query.type = type;
        }
        if (repas) {
            query.repas = repas;
        }
        if (specialite) {
            query.specialite = specialite;
        }
        if (bonpour) {
            query.bonpour = bonpour;
        }
        if (prix) {
            query.prix = prix;
        }

        // If additional filters were added, fetch publications again
        if (Object.keys(query).length > 2) { // If query contains more than tunisiaState and confirmationStatus
            console.log('Executing modified query:', query);
            publications = await Publication.find(query);
            console.log('Retrieved publications with additional filters:', publications);
        }

        // Map the publications to include the alt attribute for the image
        const publicationsWithAlt = publications.map(publication => ({
            ...publication.toObject(),
            alt: publication.tunisiaStates // You can customize the alt attribute as needed
        }));

        return NextResponse.json({ publications: publicationsWithAlt }, { status: 200 });
        
    } catch (error) {   
        console.error('Error:', error);
        return NextResponse.error('Error retrieving publications', { status: 500 });
    }
}
