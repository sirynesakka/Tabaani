import React from "react";
import Head from 'next/head';
const Admindashbord = () => {
    return (
        <div>
              <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <Head>
                <style>{`
                    .purple_border {
                        box-shadow: 2px 2px 1px rgb(100, 30, 100);
                    }
                `}</style>
            </Head>
            <div className="mb-5 mt-16 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <div className="purple_border font-serif font-semibold text-center p-6 border border-black">
                    <p className="mb-3"> Bienvenue dans votre espace Admin ! </p>
                    <p className="mb-3">Un lieu conçu pour vous permettre de gérer efficacement vos tâches et vos responsabilités</p>
                </div>
            </div>
        </div>
          
        </div>
    )
} 
export default Admindashbord;