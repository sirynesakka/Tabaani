import React from "react";

const Model = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none pt-24">
          <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
          <div className="absolute top-0 left-0 right-0 mx-auto w-full max-w-md p-8 rounded-lg bg-white shadow-xl">
            <button className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>&times;</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
