import * as React from 'react';
import Mesdemandes from '../../components/mesdemande';
import Aside1 from '../../components/aside1';
import Navbar from '../../components1/Navbar';
import Footer from '../../components1/Footer';

export default function RecipeReviewCard() {
    return (
        <>
            <Navbar hasDashboardclient={true} />
            <div className="flex justify-center">
                <Mesdemandes className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3" />
            </div>
            <Footer/>
        </>
    );
}
