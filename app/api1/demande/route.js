import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Demande from "../../models/demande";
import { NextResponse } from 'next/server';


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

    try {
        await connectDB();

        const demande = await Demande.create({
            nom,
            email,
            num,
            nombre,
            date,
            heure,
            confirme, // Incluez le champ confirme dans la création de la demande
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

        // Retrieve all users
        const demandes = await Demande.find();

        console.log(demandes ,"validée")
        return NextResponse.json({ demandes  }, {status:200});
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving demande', { status: 500 });
    }
}