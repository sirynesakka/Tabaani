import * as React from 'react';
import Reservation from '../components/mesreservations';
import Aside1 from '../components/aside1';

export default function RecipeReviewCard() {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col sm:w-1/6 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700">
                <Aside1 />
            </div>
            <div className="flex-1">
                <Reservation />
            </div>
        </div>
    );
}
