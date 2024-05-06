import connectDB from "../../../lib/mongodb";
import Publication from "../../../models/publication";
import { NextResponse } from 'next/server';

export async function PUT(request, {params}) {
    const {id} = params;
    console.log(id)
   const {type,repas,bonpour,prix,cities,titre,description,spécialité}= await request.json()

    await connectDB();

    try {
        const updatedPublication = await Publication.findOneAndUpdate({_id:id}, {
            
                type,
                repas,
                tunisiaStates:cities,
                spécialité,
                prix,
                bonpour,
                titre,
                description,
            
        });
        
        console.log("updated ", updatedPublication);
        return NextResponse.json({message: "Publication updated"}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error updating publication"}, {status: 500});
    }
} 





export async function GET(request, { params }) {
    const { id } = params;
    console.log(id);
    
    await connectDB();

    const publication = await Publication.findOne({ _id: id });
    return NextResponse.json({ publication }, { status: 200 });
}




export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    
    await connectDB();
    await Publication.findByIdAndDelete(id);
    const publications = await Publication.find({confirmer:"x"});
    return NextResponse.json({ message: "publication supprimé", publications }, { status: 200 });
  }