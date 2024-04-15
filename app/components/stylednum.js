import React from 'react';

const Stylednum = ({ label, name, defaultValue, placeholder, register, required, pattern, message ,errors}) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Nombre de personnes 
      </label>
      <div className="mt-2">
        <input
        type='number'
          name={name}
          id={name}
          defaultValue={defaultValue}
          placeholder= "0"
          {...register(name, { required,valueAsNumber: true, pattern: pattern && { value: pattern, message: message } })}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-500 sm:text-sm sm:leading-6"
        />
      </div>
      {errors && (
        <p className="mt-1 text-sm text-red-500">{errors}</p>
      )}
    </div>
  );
};

export default Stylednum;