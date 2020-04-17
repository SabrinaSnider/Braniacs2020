import React from 'react';
import './HomeCarousel.css'
import PatientCare from './CarouselItems/PatientCare'
import ExploreDpt from './CarouselItems/ExploreDpt'

/*
    All components contain static information from the original neurosurgery website
*/
const HomeCarousel = (props) => {
    return (
        <div id="home-container">
            <PatientCare /> 
            <ExploreDpt />
        </div>
    );
}

export default HomeCarousel
