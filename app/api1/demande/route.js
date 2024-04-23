import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Demande from "../../models/demande";
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
    const {
        nom,
        email,
        num,
        nombre,
        date,
        heure,
        
        confirme = false, // Ajoutez le champ confirme avec la valeur false par défaut
    } = await req.json();
    const clé = uuidv4();
    try {
        await connectDB();

        const demande = await Demande.create({
            nom,
            email,
            num,
            nombre,
            date,
            heure,
            
            confirme,
            clé, // Incluez le champ confirme dans la création de la demande
        });
        console.log(demande) ;
        const demandes = await Demande.find();

        return NextResponse.json({
            msg: ["Demande enregistrée avec succès"],
            demandes,
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
            console.log(error);
            return NextResponse.json({ msg: ["Impossible d'enregistrer la demande."] });
        }
    }
}

export async function GET(request) {
    try {
        await connectDB();

        // Retrieve demands where confirme is false
        const demandes = await Demande.find({ confirme: false });

        console.log(demandes, "validée");
        return NextResponse.json({ demandes }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.error('Error retrieving demande', { status: 500 });
    }
}

export async function PUT(request) {
    const requestData = await request.json();

    const { clé } = requestData;
    console.log(clé) ;
    try {
        await connectDB();

        // Find the publication by its clé
        const demande = await Demande.findOne({ clé });

        if (!demande) {
            return NextResponse.error('Publication not found', { status: 404 });
        }

        // Update the 'confirmer' field
        demande.confirme = "true";

        // Save the updated publication
        await demande.save();

        return NextResponse.json({ demande }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.error('Error updating publication', { status: 500 });
    }
}