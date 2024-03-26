import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import User from "../../models/user";
import { NextResponse } from 'next/server';

export async function POST(request) {

    const { id, name, selectedRole } =await request.json();

    console.log(id,name,selectedRole)
    
    // Check if required fields are provided
    if (!id || !name) {
        return NextResponse.error('Path id and name are required.', { status: 400 });
    }

    try {
        await connectDB();
        const createdUser = await User.create({ id, name, selectedRole });

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

        // Retrieve all users
        const users = await User.find();

        // Return the list of users
        return NextResponse.json({ users });
        
    } catch (error) {
        console.error(error);
        return NextResponse.error('Error retrieving users', { status: 500 });
    }
}