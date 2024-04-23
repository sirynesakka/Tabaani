import * as React from 'react';
import Reservation from '../../components/mesreservations';
import Navbar from '../../components1/Navbar';
import Footer from '../../components1/Footer';

export default function RecipeReviewCard() {
    return (
        <>
           
            <Navbar hasDashboardclient={true} /> 
           
            <div className="flex-1">
                <Reservation />
            </div>
            <Footer/>
            </>
       
    );
}
