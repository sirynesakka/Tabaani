import React from "react";
import Aside1 from "../components/aside1";
import Aside2 from "../components/aside2";
import Aside3 from "../components/aside3";

const Test = () => {
  return (
    <>
      {/* component */}
      <aside className="flex flex-col sm:flex-row">
        <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
          <Aside1 />
        </div>
        <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
          <Aside2 />
        </div>
        <div >
        <Aside3/>
        </div>
      </aside>
    </>
  );
};

export default Test;
