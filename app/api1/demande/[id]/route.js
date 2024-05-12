import connectDB from "../../../lib/mongodb";
import Demande from "../../../models/demande";
import { NextResponse } from 'next/server';

export async function PUT(request, {params}) {
    const {id} = params;
    console.log(id)
   const { nom,
    email,
   
    telnum,
    num,
    nombre,
    date,
    heure}= await request.json()
    

    await connectDB();

    try {
        const updatedDemande = await Demande.findOneAndUpdate({_id:id}, {
            
            nom,
            email,
            telnum,
            num,
            nombre,
            date,
            heure,
           
            
        });
        
        console.log("updated ", updatedDemande);
        return NextResponse.json({message: "Demande updated"}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error updating demande"}, {status: 500});
    }
} 





export async function GET(request, { params }) {
    const { id } = params;
    console.log(id);
    
    await connectDB();

    const demande = await Demande.findOne({ _id: id });
    return NextResponse.json({ demande }, { status: 200 });
}




export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    
    await connectDB();
    await Demande.findByIdAndDelete(id);
    const demandes = await Demande.find({ confirme: false });
    return NextResponse.json({ message: "publication supprimé", demandes }, { status: 200 });
  }