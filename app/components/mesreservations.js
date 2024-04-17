import React from 'react';

const Reservation = () => {
  return (
    <div className="bg-white border rounded-lg shadow-lg px-4 py-6 max-w-sm mx-auto mt-8 sm:mt-0 sm:ml-8">
      <h1 className="font-bold text-lg my-2 text-center text-blue-600">Votre table a été réservée avec succès.</h1>
      <hr className="mb-1" />
      
      <table className="w-full mb-2">
        <thead>
          <tr>
            <th className="text-left font-bold text-sm text-gray-700">Nom</th>
            <th className="text-right font-bold text-sm text-gray-700">Date</th>
          </tr>
        </thead>
        <tr>
            <td className="text-left text-sm text-gray-700">siryne</td>
            <td className="text-right text-sm text-gray-700">05/03/2024</td>
          </tr>
      </table>

      <table className="w-full mb-2">
        <thead>
          <tr>
            <th className="text-left font-bold text-sm text-gray-700">Heures</th>
            <th className="text-right font-bold text-sm text-gray-700">Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left text-sm text-gray-700">Product 1</td>
            <td className="text-right text-sm text-gray-700">$100.00</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full mb-2">
        <thead>
          <tr>
            <th className="text-left font-bold text-sm text-gray-700">Nombre de personnes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left text-sm text-gray-700">Product 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
