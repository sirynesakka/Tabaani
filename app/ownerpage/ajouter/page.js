import React from "react";
import Ajoutbtn from "../../components1/ajoutbtn";
import Head from 'next/head';

const Analy = () => {
    return (
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
                    <p className="mb-4">Vous pouvez ajouter votre publication en cliquant sur le bouton ci-dessus intitulé "Ajouter publication"</p>
                    <Ajoutbtn />
                </div>
            </div>
        </div>
    );
};

export default Analy;
