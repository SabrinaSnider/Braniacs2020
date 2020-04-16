import React from 'react';
import { Carousel } from 'react-bootstrap'
import './HomeCarousel.css'
import PatientCare from './CarouselItems/PatientCare'
import NewsVideos from './CarouselItems/NewsVideos'
import ExploreDpt from './CarouselItems/ExploreDpt'

/*
    All components contain static information from the original neurosurgery website
*/
const HomeCarousel = (props) => {
    return (
        <div>
            <PatientCare /> 
            <NewsVideos />
            <ExploreDpt />
        </div>
    );
}

export default HomeCarousel
