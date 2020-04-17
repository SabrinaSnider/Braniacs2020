import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap'
import './ExploreDpt.css'

/*
    Carousel slide for the "Explore Department" page
*/
const ExploreDpt = (props) => {
    return (
        <div id="explore-dpt-container">
            <h2 id="explore-dpt-title">EXPLORE OUR DEPARTMENT</h2>
            <CardDeck id="explore-dpt-carddeck">
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/ExploreDpt/I1.jpg" />
                    <Card.Body>
                        <Card.Title>Neurosurgery Residency</Card.Title>
                        <Card.Text>
                            <h3>Resident Education</h3>
                            <p>
                                We are an ACGME-accredited neurosurgery residency program with 3 residents per year.
                            </p> 
                            <div className="explore-dpt-button-container">
                                <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>LEARN MORE</Button>
                                <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/applicants/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>APPLY</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/ExploreDpt/I2.jpg" />
                    <Card.Body>
                        <Card.Title>Research</Card.Title>
                        <Card.Text>
                            <h3>Research &amp; Clinical Trials</h3>
                            <p>
                                Faculty of the Department of Neurosurgery collaborate with basic scientists to seek new 
                                cures for neurologic illness through research.
                            </p>
                            <div className="explore-dpt-button-container">
                                <Button href="http://com-neurosurgery-a2.sites.medinfo.ufl.edu/research/clinical-trials/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>CLINICAL TRIALS</Button>
                                <Button href="http://com-neurosurgery-a2.sites.medinfo.ufl.edu/research/laboratories/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>LABORATORIES</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default ExploreDpt
