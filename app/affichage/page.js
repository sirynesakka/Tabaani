"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Rating from "../components/rating";
import Footer from "../components1/Footer";
import Modal from "../components/reservationForm";

const Affichage = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState([]);

  const fetchComment = async () => {
    try {
      const response = await axios.get("/api1/comments");
      setComment(response.data.comments);
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

  // Function to handle rating change and save it to localStorage
  const handleRatingChange = (value) => {
    setRating(value);
    localStorage.setItem("rating", value);
  };

  const [publication, setPublication] = useState();
  const { user } = useUser();
  const { email } = user || {};
  console.log(email);
  useEffect(() => {
    fetchPublication();
  }, []);

  const fetchPublication = async () => {
    // Récupérer la clé de la publication à partir du stockage local
    const clé = localStorage.getItem("clickedPublicationId");
    if (clé) {
      try {
        const response = await axios.get(`/api1/client?clé=${clé}`);
        setPublication(response.data.publication);
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

  const handleChange = (e, ratingValue) => {
    // Check if e exists and has a target property
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value, rating: ratingValue });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const clé = localStorage.getItem("clickedPublicationId");

    try {
      const response = await fetch("/api1/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: formData.comment,
          rating: rating,
          pubclé: clé,
          useremail: email,
        }),
      });
      if (response.ok) {
        console.log("Comment posted successfully");
        // Optionally, clear the form fields after successful submission
        console.log(clé);
        setFormData({
          pubclé: "",
          useremail: email,
          comment: "",
          rating: "",
        });
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <>
      {publication && (
        <div class="max-w-screen-xl mx-auto">
          <div class=" z-0 mt-10">
            <div className="font-semibold font-serif underline text-2xl">
              {publication.titre}
            </div>
            <p className="text-gray-700 text-base mb-4 ">{publication.type}</p>
            <div class="block md:flex md:space-x-2 px-2 lg:p-0">
              <a
                class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
                style={{ height: "24em" }}
                href="#"
              >
                <div
                  class="absolute left-0 bottom-0 w-full h-full z-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                  }}
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                  class="absolute z-0 left-0 top-0 w-full h-full rounded z-0 object-cover"
                />
              </a>

              <div class="w-full md:w-1/3 relative rounded">
                <div className="relative w-full h-96">
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
            <div class="w-full mt-9 lg:w-2/3 px-3">
              <div class="mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                  Pour réserver
                </h5>
                <div class="flex z-20 justify-center mt-11">
                  <div class="px-24 ">
                    <Modal />
                  </div>
                </div>
              </div>

              <div class="border border-dotted"></div>
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

                  <div className="font-semibold font-serif mt-10 px-8 underline text-xl mb-2">
                    Review
                  </div>
                </div>
                <div className=" px-5 flex items-center">
                  <div class="flex justify-center items-center">
                    <div class="flex items-center mt-2 mb-4 px-8">
                      <svg
                        class="mx-1 w-4  h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4  h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4  h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4  h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4  h-4 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
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
              <form onSubmit={handleSubmit}>
                <div class="max-w-lg border px-5 py-5 rounded-lg">
                  <div className="block text-sm font-medium leading-6 text-gray-900">
                    Rate your experience:
                  </div>
                  <Rating onChange={handleRatingChange} />
                  <div class="mt-5">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      {" "}
                      commentaire
                    </label>
                    <textarea
                      type="text"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-500 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mt-2"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>

                <div className="mt-5 max-w-lg border px-6 py-4 rounded-lg">
  {comment.map((comment) => (
    <div key={comment.id} className="flex items-center mb-6">
      <div>
        <div className="text-lg font-medium text-gray-800">{comment.useremail}</div>
        <div className="text-gray-500">{comment.comment}</div>
      </div>
      <p className="text-lg leading-relaxed mb-6">aa</p>
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
            <i className="far fa-thumbs-up"></i> Like
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="far fa-comment-alt"></i> Reply
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
            <i className="far fa-flag"></i> Report
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="far fa-share-square"></i> Share
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

              </form>
            </div>
          </div>
          <footer class="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Affichage;
