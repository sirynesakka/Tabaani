
import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Comment from "../../models/comments";
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        await connectDB();

        // Retrieve all comments
        const comments = await Comment.find();

        console.log(comments ,"validée")
        return NextResponse.json({ comments  }, {status:200});
        
    } catch (error) {   
        console.error(error);
        return NextResponse.error('Error retrieving users', { status: 500 });
    }
}
