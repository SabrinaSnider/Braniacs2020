import React from 'react';
import { Carousel } from 'react-bootstrap'
import './HomeCarousel.css'
import PatientCare from './CarouselItems/PatientCare'
import NewsVideos from './CarouselItems/NewsVideos'
import ExploreDpt from './CarouselItems/ExploreDpt'

const HomeCarousel = (props) => {
    return (
        <Carousel 
            style={{width: '80vw', height: '75vh', margin:'25px auto'}}
            interval = {10000}
            nextIcon = {<i class="fas fa-chevron-right" style={{color: 'black', "font-size": "2em"}}></i>}
            prevIcon = {<i class="fas fa-chevron-left" style={{color: 'black', "font-size": "2em"}}></i>}
        >
            <Carousel.Item>
                {/* Patient Care */}
                <PatientCare />
            </Carousel.Item>

            <Carousel.Item>
                {/* Recent News and Videos */}
                <NewsVideos />
            </Carousel.Item>

            <Carousel.Item>
                {/* Explore Our Department */}
                <ExploreDpt />
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel