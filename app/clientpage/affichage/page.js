"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import sentiment from 'sentiment';
import Rating from "../../components/rating";
import Footer from "../../components1/Footer";
import Deletecomment  from "../../components/deleteComment"
import Modal from "../../components/reservationForm";
import DisplayImage from "../../components/DisplayImage"
import { emotionConfig } from "../../config";
import StarRating from "../../components/starRating"


const Affichage = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState([]);
  const defaultColor = "#cccccc";
  const [rows, setRows] = useState(2);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState();
  const [color, setColor] = useState(defaultColor);
  const [tagsVisible, setTagsVisible] = useState(false);
  const [ratingValue, setRatingValue] = useState(null); // New state to store rating value

 
 

  const fetchComment = async () => {
    const clé = localStorage.getItem("clickedClédepub");
    console.log("le clé de comments :", clé);
  
    try {
      console.log("l'API est appelé");
      const response = await axios.get('/api1/comments', {
        params: {
          pubclé: clé
        }
      });
  
      const comments = response.data.comments;
      const rating = response.data.rating; // Assuming the rating data is included in the response
  
      // Set the rating value state using the retrieved rating data
  
      // Now you can set the comment state
      setComment(comments);
      console.log("comments data : ", comments);
      console.log("rating data : ", rating);
    } catch (error) {
      console.error("Error", error);
    }
  };
  
  useEffect(() => {
    fetchComment();
  }, []);
    // Polling to fetch comments periodically
    useEffect(() => {
      const interval = setInterval(fetchComment, 5000); // Fetch every 5 seconds (adjust as needed)
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

  const [publication, setPublication] = useState();
  const { user } = useUser();
  const { email } = user || {};
  console.log(email);
  useEffect(() => {
    fetchPublication();
  }, []);

  const fetchPublication = async () => {
    // Récupérer la clé de la publication à partir du stockage local
    const clé = localStorage.getItem("clickedClédepub");
    console.log("clé client est :", clé)
    if (clé) {
      try {
        const response = await axios.get(`/api1/client?clé=${clé}`);
        setPublication(response.data.publication);
        localStorage.setItem("ownerEmailPourDemande", response.data.publication.ownerEmail);
      } catch (error) {
        console.error("Error fetching publication:", error);
      }
    }
    console.log(publication);
  };

  const [formData, setFormData] = useState({
    pubclé: "",
    useremail: "",
    comment: "",
    rating: "",
  });


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = formData.comment;
    // Run prediction logic
    console.log("input est :::",input);
    if (input) {
      setLoading(false);
      setTagsVisible(false);
      try {
        console.log("l api emotion est appelé");
        const res = await axios.post("/api1/emotion", { input: input });
        setOutput(res.data.filteredResponse);
        console.log("2",res.data.filteredResponse);
        setLoading(false);
        // Retrieve rating value from prediction result
        if (res.data.filteredResponse) {
          setTagsVisible(true);
          const ratingLabel = res.data.filteredResponse[0].label;
          localStorage.setItem('ratingLabel', ratingLabel); 
          setRatingValue(res.data.filteredResponse[0].label); // Setting the first element
          console.log("setRatingValue", res.data.filteredResponse[0].label); // Logging the label of the first element
          
          console.log("RatingValue", ratingValue); // Logging the ratingValue directly
        }
      } catch (error) {
        console.error("Error fetching predictions:", error);
        setLoading(true);
      }
    }
    const storedRatingLabel = localStorage.getItem('ratingLabel');

    // Post data with predicted rating
    try {
      const clé = localStorage.getItem("clickedClédepub");
      const Owneremail = localStorage.getItem("ownerEmailPourDemande");
      const response = await fetch("/api1/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: input,
          rating: storedRatingLabel,
          pubclé: clé,
          useremail: email,
          Owneremail: Owneremail,
        }),
      });
      if (response.ok) {
        console.log("Comment posted successfully");
        setComment([...comment, { comment: input, useremail: email }]);
        setInput(""); // Clear input after successful submission
         // Mettre à jour le rating de la publication
      await fetch("/api1/pubrating", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clé: clé,
          newRating: storedRatingLabel,
        }),
      });

      // Recharger les commentaires pour afficher les mises à jour
      fetchComment();
    } else {
      console.error("Échec de la publication du commentaire");
    }
  } catch (error) {
    console.error("Erreur lors de la publication du commentaire:", error);
  }
      
  };
  
  useEffect(() => {
    ///
    handleColor()
    
  }, [rating])
  function handleColor() {
    
      const colorKey = rating;
      const emotionConfigItem = emotionConfig[colorKey];
      if (emotionConfigItem) {
        const colorHex = emotionConfigItem.colorHex;
        setColor(colorHex);
      } else {
        // Handle the case when emotionConfigItem is undefined
        // For example, set a default color
        setColor(defaultColor);
      }
    
  }

 
  return (
    <>
      {publication && (
        <div class="max-w-screen-xl mx-auto">
          <div class=" z-0 mt-10">
            <div className="font-semibold font-serif underline  text-4xl  uppercase text-center  ">
              {publication.titre}
            </div>
            <p className="text-gray-700 text-base mb-4 ">{publication.type}</p>
            <div class="block md:flex md:space-x-2 px-2 lg:p-0">
              <a
                class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
                style={{ height: "24em" }}
                href="#"
              >
                
                <DisplayImage publication={publication} />
              </a>

          
            <div class="w-full z-0 md:w-1/3 relative rounded">
                <div className="relative  w-full h-96">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
           

            <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-8 py-4">
                  <div className="font-semibold font-serif mt-10 px-8  underline text-xl mb-2">
                    Description de l'endroit
                  </div>
                  <p className="text-gray-700 px-8 font-serif">
                    {publication.description}
                  </p>

                </div>
                
              </div>
              

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-semibold font-serif underline text-xl mb-2">
                    Les Détailes
                  </div>
                  <div className=" mt-4 text-gray-700 font-semibold font-serif text-base">
                    Cuisine
                  </div>
                  <p className="text-gray-700 font-serif">
                    {publication.spécialité}
                  </p>

                  <div className="mt-4 text-gray-700 font-semibold font-serif text-base">
                    Le repas proposé par cet endroit
                  </div>
                  <p className="text-gray-700 font-serif">
                    {publication.repas}
                  </p>
                  <div className=" mt-4 text-gray-700 font-semibold font-serif  text-base">
                    La spécialité de cet endroit
                  </div>
                  <p className="text-gray-700 font-serif">
                    {publication.spécialité}
                  </p>
                  <div className=" mt-4 text-gray-700 font-semibold font-serif  text-base">
                    Le prix
                  </div>
                  <p className="text-gray-700 font-serif">{publication.prix}</p>
                  <div className="mt-4 text-gray-700 font-semibold font-serif  text-base">
                    Cet endroit est bon pour
                  </div>
                  <p className="text-gray-700 font-serif">
                    {publication.bonpour}
                  </p>
                </div>

                <div class="border border-dotted"></div>
                <div className="font-semibold font-serif  px-6  underline text-xl mb-2">
                  Pour plus de détails, veuillez contacter le 58927359
                </div>
              </div>
             
             

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-8 py-4">
                  
                
                <div class="mb-4">
                <h5 class="font-semibold font-serif text-lg uppercase text-gray-700 px-1 mb-2">
                  Pour réserver
                </h5>
                <div class="flex z-20 justify-center mt-11">
                
                  <div class="px-24 ">
                  <Modal />
                  </div>
                  
                </div>
                <div class="border border-dotted mt-6"></div>
                <h5 class="font-semibold font-serif text-lg uppercase text-gray-700 px-1 mb-2 mt-5">
                  Review
                </h5>
                <StarRating rating={publication.rating} />
              </div>
             
                </div>
                
              </div>
          
             
            </div>
          </div>
          <form onSubmit={handleSubmit}>
                <div class="max-w-lg border px-5 py-5 rounded-lg">
                  <div class="mt-5">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      {" "}
                      commentaire
                    </label>
                    <textarea
                      type="text"
                      name="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-500 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="submit"
                      className="bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-600 mt-2"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>

                <div class=" border px-6 py-7 rounded-lg">
  {comment.map((comment) => (
    <div key={comment.id}>
     <div class="flex  items-center">
      <div>
        <div className="text-lg font-serif font-semibold text-gray-800">{comment.useremail}</div>
        <div className="text-gray-500">2h</div>
        <p className="text-lg font-serif leading-relaxed mb-6">{comment.comment}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {comment.rating && emotionConfig[comment.rating] && ( // Added conditional check
            <span
              key={comment.rating.label}
              className="transition-all cursor-pointer bg-indigo-100 text-indigo-800 text-lg px-4 py-1 rounded-full border border-indigo-400"
            >
              {emotionConfig[comment.rating].emoji}
            </span>
          )}
        </div>
      </div>
      </div>
      
      
      <div className="flex mb-9 justify-between items-center">
        <div>
        </div>
        <div className="flex items-center">
        <a href="#" class="text-gray-500 hover:text-gray-700 mr-4 font-serif"><i class="far fa-flag"></i> <Deletecomment id={comment._id} setComment={setComment} /></a>
       
        </div>
        </div>
        <div class=" mb-4 border border-dotted"></div>
       
    </div>
    
  ))}
</div>

              </form>
          <footer class="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
            <Footer />
          </footer>
        </div>
      )}
    
    </>
  );
};

export default Affichage;
