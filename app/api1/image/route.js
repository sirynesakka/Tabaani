import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import UploadModel from "../../models/UploadModel";
import UploadFileMinio from "../../utils/minio";

/**
 *
 * @param request {Request}
 * @returns {Promise<NextResponse<{data: {hello: boolean}}>>}
 * @constructor
 */
export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("img");
  const clé = formData.get("clé");
  // upload files to minio
  console.log(file);

  const buffer = Buffer.from(await file.arrayBuffer());
  const originalFileName = file.name.replaceAll(" ", "_");
  const minioFileName = file.name.replaceAll(" ", "_");
  const documentType = "";

  UploadFileMinio({
    bucketName: process.env.UPLOADS_BUCKET_NAME,
    fileStream: buffer,
    objectName: minioFileName,
  });

  // insert file to db

  try {
    await connectDB();
    console.log(clé);
    await UploadModel.create({
      name: originalFileName,
      location: minioFileName,
      type: documentType,
      bucketName: process.env.UPLOADS_BUCKET_NAME,
      cléDePub: clé,
    });

    const uploadModels = await UploadModel.find();
    return NextResponse.json({
      msg: ["Image information saved successfully"],
      uploadModels,
      success: true,
    });
  } catch (error) {
    let err;
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      err = error;
      console.log(err);
      return NextResponse.json({ msg: ["Unable to save user information."] });
    }
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const cléDePub = searchParams.get("cléDePub");
  console.log("le clé est : ", cléDePub);

  if (!cléDePub) {
    return NextResponse.error(
      new Error("Missing 'cléDePub' parameter in the request")
    );
  }

  try {
    await connectDB();
    const uploadModel = await UploadModel.findOne({ cléDePub });

    if (!uploadModel) {
      return NextResponse.json({ msg: ["Data not found"] });
    }

    // Retrieve bucketName and location from the uploadModel
    // Return bucketName and location as response
    return NextResponse.json(uploadModel);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: ["Error retrieving data"] });
  }
}


export async function PUT(request) {
  console.log("PUT request received");
  const formData = await request.formData();
  const cléDePub = formData.get("cléDePub");
  console.log("cléDePub:", cléDePub);

  const file = formData.get("img");
  if (!file) {
    console.error("No file provided in the request");
    return NextResponse.error(
      new Error("No file provided in the request")
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const originalFileName = file.name.replaceAll(" ", "_");
  const minioFileName = file.name.replaceAll(" ", "_");
  const documentType = "";

  console.log("File information:", {
    originalFileName,
    minioFileName,
    documentType,
  });

  UploadFileMinio({
    bucketName: process.env.UPLOADS_BUCKET_NAME,
    fileStream: buffer,
    objectName: minioFileName,
  });

  console.log("File uploaded to MinIO");

  try {
    await connectDB();
    console.log("Connected to MongoDB");

    const uploadModel = await UploadModel.findOneAndUpdate(
      { cléDePub },
      {
        name: originalFileName,
        location: minioFileName,
        type: documentType,
        bucketName: process.env.UPLOADS_BUCKET_NAME,
        cléDePub: cléDePub,
      },
      { new: true }
    );

    if (!uploadModel) {
      console.error("Data with the provided 'cléDePub' not found");
      return NextResponse.error(
        new Error("Data with the provided 'cléDePub' not found")
      );
    }

    console.log("Image information updated successfully:", uploadModel);

    return NextResponse.json({
      msg: ["Image information updated successfully"],
      uploadModel,
      success: true,
    });
  } catch (error) {
    console.error("Error updating image information:", error);
    return NextResponse.json({ msg: ["Error updating image information"] });
  }
}
