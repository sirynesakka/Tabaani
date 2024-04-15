"use client"
import * as React from 'react';
import Mesdemandes from '../components/mesdemande';
import Aside1 from '../components/aside1';


export default function RecipeReviewCard() {

    return (
        <>
        {/* component */}
<aside className="flex flex-col sm:flex-row">
  <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
    <Aside1 />
  </div>
  <div className="flex items-center justify-center flex-1">
  <Mesdemandes/>
  </div>
</aside>

      </>
  );
}