import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';


const LoginForm = () => {
    return (
        <div className="container mx-auto bg-white p-8 rounded-lg mt-16 max-w-md border-2 border-solid border-blue-700">
            <h2 className="title text-2xl font-semibold relative text-center text-blue-800  mb-8">Connexion</h2>
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block font-semibold text-blue-800 mb-1">Email</label>
                    <input type="email" id="email" placeholder="Entrer votre email " required className="w-full border border-blue-900 focus:border-gray-700 rounded outline-none px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="password" className="block font-semibold text-blue-800 mb-1">Mot de passe</label>
                    <input type="password" id="password" placeholder="Entrer votre mot de passe" required className="w-full border border-blue-900 focus:border-gray-700 rounded outline-none px-3 py-2" />
                </div>
                <div className="text-center"> 
                    <a href="#" className="text-sm text-blue-900 hover:text-gray-800">Mot de passe oublié?</a>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button type="submit" className="bg-gradient-to-r from-gray-900 to-blue-700 text-white font-semibold py-2 px-6 rounded-md cursor-pointer hover:bg-gray-600 h-12">Connexion</button>
                </div>
            </form>
            <div className="text-center text-blue-900 mt-4">
                Vous n'avez pas de compte? <Link href="/Signup" className="hover:text-gray-800">Inscrivez-vous</Link>
            </div>
        </div>
    );
};

export default LoginForm;