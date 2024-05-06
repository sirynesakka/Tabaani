'use client'// Test.js
import React, { useState } from "react";
import Aside2 from "../../components/aside2";
import Aside3 from "../../components/aside3";

const Test = () => {
  
  const [options, setOptions] = useState({});
  const handleOptionsChange = (options) => {
    setOptions(options);
  };


  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Aside2 onOptionsChange={setOptions} handleOptionsChange={handleOptionsChange} />
        </div>
        <div className="w-full sm:w-1/2">
          <Aside3 options={options} />
        </div>
      </div>
    </div>
  );
};

export default Test;
