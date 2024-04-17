import * as minio from "minio"


// Configure Minio client
const minioClient = new minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

// Function to handle image upload
export default async function UploadFileMinio({
    bucketName,
    objectName,
    filePath,
    fileStream,
    mimeType="application/x-compress",
}){
    const metaData = {
        "Content-type": mimeType,
    };
    if (filePath) {
        await minioClient.fPutObject(bucketName, objectName,  filePath, metaData);
    }else {
        await minioClient.putObject(bucketName, objectName,  fileStream, metaData);

    }
}

export async function DeleteFileMinio({ bucketName, objectName}){
    if (bucketName && objectName){
        await minioClient.removeObject(bucketName,objectName);
    }
}
