import connectDB from "../../lib/mongodb";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectDB();

    // Récupérer la clé de la publication à partir des paramètres de requête
    const clé = request.nextUrl.searchParams.get("clé");

    // Vérifier si la clé est présente dans la requête
    if (!clé) {
      return NextResponse.error('Clé de publication manquante', { status: 400 });
    }

    // Rechercher la publication avec la clé spécifiée
    const publication = await Publication.findOne({ clé });

    // Vérifier si la publication existe
    if (!publication) {
      return NextResponse.error('Publication introuvable', { status: 404 });
    }

    // Retourner la publication trouvée
    return NextResponse.json({ publication }, { status: 200 });

  } catch (error) {   
    console.error(error);
    return NextResponse.error('Erreur lors de la récupération de la publication', { status: 500 });
  }
}
