import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import User from '../../models/user'
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    // Find the first user with the given email and selected role
    const user = await User.findOne({ email, selectedRole: { $exists: true, $ne: null } });

    if (!user) {
      return NextResponse.json({ message: 'Aucun utilisateur trouvé avec un rôle sélectionné' }, { status: 404 });
    }

    const role = user.selectedRole;
    console.log("User role:", role);

    return NextResponse.json({ role }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.error('Erreur lors de la recherche de l\'utilisateur', { status: 500 });
  }
}
  