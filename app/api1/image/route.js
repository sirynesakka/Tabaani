import { NextResponse } from "next/server";
import {
  UploadModel,
} from "../../models/UploadModel";
import UploadFileMinio from "../../utils/minio";


/**
 *
 * @param request {Request}
 * @returns {Promise<NextResponse<{data: {hello: boolean}}>>}
 * @constructor
 */
export async function POST(request) {
  const formData = await request.formData();
  const counterIndex = formData.get("counterIndex");
  const documentType = formData.get("documentType");
  const files = formData.get("img");
  // upload files to minio
  
  
  await Promise.all(
    files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const originalFileName = file.name.replaceAll(" ", "_");
      const minioFileName =
      
       file.name.replaceAll(" ", "_");
      UploadFileMinio({
        bucketName: process.env.UPLOADS_BUCKET_NAME,
        fileStream: buffer,
        objectName: minioFileName,
      });

      // insert file to db
      await UploadModel.create({
        name: originalFileName,
        location: minioFileName,
        type: documentType,
        bucketName: process.env.UPLOADS_BUCKET_NAME,
      });
    })
  );
}
