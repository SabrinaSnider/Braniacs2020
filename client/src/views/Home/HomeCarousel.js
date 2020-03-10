import React from 'react';
import { Carousel } from 'react-bootstrap'

const HomeCarousel = (props) => {
    return (
        <Carousel style={{width: '80vw', height: '70vh', margin:'25px auto'}}>
            <Carousel.Item>
                <div style={{backgroundColor: '#EAEAEA', width: '80vw', height: '70vh'}}></div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{backgroundColor: '#EAEAEA', width: '80vw', height: '70vh'}}></div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{backgroundColor: '#EAEAEA', width: '80vw', height: '70vh'}}></div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel