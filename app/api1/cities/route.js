import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Cities from "../../models/cities";
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        await connectDB();

        // Retrieve all users
        const cities = await Cities.find();

        console.log(cities ,"validée")
        return NextResponse.json({ cities  }, {status:200});
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving users', { status: 500 });
    }
}