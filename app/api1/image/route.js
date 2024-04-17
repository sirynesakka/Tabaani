import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import mongoose from "mongoose";
import  UploadModel from "../../models/UploadModel";
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

await UploadModel.create({
name: originalFileName,
location: minioFileName,
type: documentType,
bucketName: process.env.UPLOADS_BUCKET_NAME,
});



  const uploadModels = await UploadModel.find();
  return NextResponse.json({
    msg: ["Image information saved successfully"],
    uploadModels,
    success: true,
  });

}  catch (error) {
  let err;
  if (error instanceof mongoose.Error.ValidationError) {
    let errorList = [];
    for(let e in error.errors) {
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
