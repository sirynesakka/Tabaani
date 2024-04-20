import React from "react";
import Aside2 from "../../components/aside2";
import Aside3 from "../../components/aside3";

const Test = () => {
  return (
    <>
      {/* component */}
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Aside2 />
        </div>
        <div className="w-full sm:w-1/2">
          <Aside3 />
        </div>
      </div>
    </>
  );
};

export default Test;
