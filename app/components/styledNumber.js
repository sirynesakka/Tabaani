import React from 'react';

const StyledNumber = ({ label, name, defaultValue, placeholder, register, required, message, errors }) => {
  return (
    <div className="col-span-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="number" // Set the type to number
          name={name}
          id={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name, { required, message })}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-500 sm:text-sm sm:leading-6"
        />
      </div>
      {errors && (
        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
      )}
    </div>
  );
};

export default StyledNumber;
