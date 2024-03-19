// /home/leema/tabaani-frontend/app/api1/callback/route.js

import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import User from "../../models/user";

export async function POST(req, res) {
    const { id, name } = req.body;

    try {
        await connectDB();
        const createdUser = await User.create({ id, name });

        // Return success response
        return {
            status: 200,
            body: JSON.stringify({
                msg: ["Message envoyé avec succès"],
                success: true,
                createdUser,
            }),
        };
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            // Return validation error response
            return {
                status: 400,
                body: JSON.stringify({ msg: errorList }),
            };
        } else {
            console.error(error);
            // Return generic error response
            return {
                status: 500,
                body: JSON.stringify({ msg: ["Impossible d'envoyer le message"] }),
            };
        }
    }
}
