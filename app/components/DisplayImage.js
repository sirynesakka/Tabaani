import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function DisplayImage({ publication }) {
  const [image, setImage] = useState({});
  useEffect(() => {
    if (publication) {
      fetchImage(publication.clé);
    }
  }, [publication]);

  const fetchImage = async (clé) => {
    try {
      const { data } = await axios.get(`/api1/image?cléDePub=${clé}`);
      console.log(data);

      setImage(data);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  // Function to generate download link
  function downloadLink({ bucketName, location }) {
    const url = `${process.env.NEXT_PUBLIC_MINIO_PUBLIC_ENDPOINT}/${bucketName}/${location}`;
    return url;
  }
  return (
    <Image
      src={downloadLink(image)}
      alt="aa"
      width={600} // Set both width and height to 600 pixels
      height={600}
    />
  );
}
