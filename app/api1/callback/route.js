import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import User from "../../models/user";
import { NextResponse } from 'next/server';

export async function POST(request) {

    const { id, email, selectedRole ,picture} =await request.json();

    console.log(id,email,selectedRole ,picture)
    
    // Check if required fields are provided
    if (!id || !email) {
        return NextResponse.error('Path id and name are required.', { status: 400 });
    }

    try {
        await connectDB();
        const createdUser = await User.create({ id, email, selectedRole, picture });

        // Return success response
        return NextResponse.json({
            msg: ["Message envoyé avec succès"],
            success: true,
            createdUser,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            // Return validation error response
            return NextResponse.json({ msg: errorList }, { status: 400 });
        } else {
            console.error(error);
            // Return generic error response
            return NextResponse.error("Impossible d'envoyer le message", { status: 500 });
        }
    }
}






export async function GET(request) {
    try {
        await connectDB();

        // Retrieve all users except those with role 'admin'
        const users = await User.find({ selectedRole: { $ne: 'admin' } }); // Exclude 'admin' users

        // Return the list of filtered users
        return NextResponse.json({ users });
        
    } catch (error) {
        console.error(error);
        return NextResponse.error('Error retrieving users', { status: 500 });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "user supprimé" }, { status: 200 });
  }
  