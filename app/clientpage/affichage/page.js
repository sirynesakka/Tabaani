"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Rating from "../../components/rating";
import Footer from "../../components1/Footer";
import DeleteComment from "../../components/DeleteComment";
import Modal from "../../components/reservationForm";
import DisplayImage from "../../components/DisplayImage";
import StarRating from "../../components/StarRating";
import { useRouter } from "next/navigation";
import { emotionConfig } from "../../config";

const Affichage = () => {
  const [comment, setComment] = useState([]);
  const [input, setInput] = useState("");
  const { isLoading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const verifyUserRole = async () => {
      try {
        if (!isLoading && user) {
          const role = await checkUserRole();
          console.log("User role:", role);
          if (role !== "client") {
            router.replace("/403");
          }
        }
      } catch (error) {
        console.error("Error verifying user role:", error);
      }
    };

    verifyUserRole();
  }, [isLoading, user, router]);

  const checkUserRole = async () => {
    try {
      const params = { email: user?.email };
      const response = await axios.get('/api1/checkRole', { params });
      const role = response.data.role;
      console.log("User role:", role);
      return role;
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchComment();
    const interval = setInterval(fetchComment, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchComment = async () => {
    const clé = localStorage.getItem("clickedClédepub");
    try {
      const response = await axios.get('/api1/comments', {
        params: { pubclé: clé }
      });
      const { comments, rating } = response.data;
      setComment(comments);
      console.log("Comments:", comments);
      console.log("Rating:", rating);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const [publication, setPublication] = useState();

  useEffect(() => {
    fetchPublication();
  }, []);

  const fetchPublication = async () => {
    const clé = localStorage.getItem("clickedClédepub");
    if (clé) {
      try {
        const response = await axios.get(`/api1/client?clé=${clé}`);
        setPublication(response.data.publication);
        localStorage.setItem("ownerEmailPourDemande", response.data.publication.ownerEmail);
      } catch (error) {
        console.error("Error fetching publication:", error);
      }
    }
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
    if (input) {
      try {
        const res = await axios.post("/api1/emotion", { input });
        const { filteredResponse } = res.data;
        if (filteredResponse) {
          const ratingLabel = filteredResponse[0]?.label;
          localStorage.setItem('ratingLabel', ratingLabel);
          console.log("RatingValue:", ratingLabel);
        }
      } catch (error) {
        console.error("Error fetching predictions:", error);
      }
    }

    const storedRatingLabel = localStorage.getItem('ratingLabel');

    try {
      const clé = localStorage.getItem("clickedClédepub");
      const Owneremail = localStorage.getItem("ownerEmailPourDemande");
      const response = await axios.post("/api1/comments", {
        comment: input,
        rating: storedRatingLabel,
        pubclé: clé,
        useremail: user?.email,
        Owneremail: Owneremail,
      });
      if (response.status === 200) {
        console.log("Comment posted successfully");
        setComment([...comment, { comment: input, useremail: user?.email }]);
        setInput("");
        await axios.put("/api1/pubrating", {
          clé,
          newRating: storedRatingLabel,
        });
        fetchComment();
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
        <div className="max-w-screen-xl mx-auto">
          {/* Display Publication Details */}
          <div className="mt-10">
            <div className="font-semibold text-4xl uppercase text-center">{publication.titre}</div>
            <div className="block mt-8 md:flex md:space-x-2 px-2 lg:p-0">
              <DisplayImage publication={publication} />
              <div className="w-full md:w-1/3 relative rounded">
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
            <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
              <div className="max-w-sm border-green-600 border-2 rounded overflow-hidden shadow-lg">
                <div className="px-8 py-4">
                  <div className="font-semibold mt-10 px-8 underline text-xl mb-2">Description de l'endroit</div>
                  <p className="text-gray-700 px-8">{publication.description}</p>
                </div>
              </div>
              <div className="max-w-sm border-green-600 border-2 rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-semibold underline text-xl mb-2">Les Détails</div>
                  <div className="mt-4 text-gray-700 font-semibold text-base">Cuisine</div>
                  <p className="text-gray-700">{publication.spécialité}</p>
                  <div className="mt-4 text-gray-700 font-semibold text-base">Le repas proposé par cet endroit</div>
                  <p className="text-gray-700">{publication.repas}</p>
                  <div className="mt-4 text-gray-700 font-semibold text-base">La spécialité de cet endroit</div>
                  <p className="text-gray-700">{publication.spécialité}</p>
                  <div className="mt-4 text-gray-700 font-semibold text-base">Le prix</div>
                  <p className="text-gray-700">{publication.prix}</p>
                  <div className="mt-4 text-gray-700 font-semibold text-base">Cet endroit est bon pour</div>
                  <p className="text-gray-700">{publication.bonpour}</p>
                </div>
              </div>
              <div className="max-w-sm border-green-600 border-2 rounded overflow-hidden shadow-lg">
                <div className="px-8 py-4">
                  <div className="mb-4">
                    <h5 className="font-semibold text-lg uppercase text-gray-700 px-1 mb-2">Pour réserver</h5>
                    <div className="flex justify-center mt-11">
                      <div className="px-24">
                        <Modal />
                      </div>
                    </div>
                    <div className="border-green-600 border-2 mt-6"></div>
                    <h5 className="font-semibold text-lg uppercase text-gray-700 px-1 mb-2 mt-5">Review</h5>
                    <StarRating rating={publication.rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Comment Form and Display */}
          <form onSubmit={handleSubmit}>
            <div className="max-w-lg border-green-600 border-2 px-5 py-5 rounded-lg">
              <label className="block text-sm text-center font-semibold leading-6 text-gray-900">
                Veuillez entrer votre commentaire:
              </label>
              <textarea
                type="text"
                name="comment"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="block w-full rounded-md border-green-600 border-2 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="bg-green-700 text-white font-semibold px-3 py-1 rounded-md hover:bg-green-600 mt-2"
              >
                Enregistrer
              </button>
            </div>

            {/* Display Comments */}
            <div className="border-green-600 border-2 mt-9 px-6 py-7 rounded-lg">
              {comment.map((comment) => (
                <div key={comment.id}>
                  <div className="flex items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-800">{comment.useremail}</div>
                      <div className="text-gray-500">2h</div>
                      <p className="text-lg leading-relaxed mb-6">{comment.comment}</p>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {comment.rating && emotionConfig[comment.rating] && (
                          <span
                            key={comment.rating.label}
                            className="bg-indigo-100 text-indigo-800 text-lg px-4 py-1 rounded-full border border-indigo-400"
                          >
                            {emotionConfig[comment.rating].emoji}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-9 justify-between items-center">
                    <div></div>
                    <div className="flex items-center">
                      <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                        <i className="far fa-flag"></i> <DeleteComment id={comment._id} setComment={setComment} />
                      </a>
                    </div>
                  </div>
                  <div className="mb-4 border-green-600 border"></div>
                </div>
              ))}
            </div>
          </form>
          <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Affichage;
