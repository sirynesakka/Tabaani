import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import Publication from "../../models/publication";
import { NextResponse } from 'next/server';

export async function PUT(req) {
    const { clé, newRating } = await req.json();
    try {
      await connectDB();
      const publication = await Publication.findOne({ clé });
  
      if (publication) {
        let updatedRating;
        if (publication.rating === "0") {
          updatedRating = newRating;
        } else {
          updatedRating = ((parseFloat(publication.rating) + parseFloat(newRating)) / 2).toString();
        }
        publication.rating = updatedRating;
        await publication.save();
        return NextResponse.json({
          msg: ["Rating updated successfully"],
          publication,
          success: true,
        });
      } else {
        return NextResponse.json({
          msg: ["Publication not found"],
          success: false,
        });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        msg: ["Unable to update rating"],
        success: false,
      });
    }
  }