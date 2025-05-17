// TimePicker.js
import React from 'react';
import { Controller } from 'react-hook-form';

const TimePicker = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          type="time"
          {...field }
          style={{ width: '100%', padding: '0.5rem' }}
          required
        />
      )}
    />
  );
};

export default TimePicker;
