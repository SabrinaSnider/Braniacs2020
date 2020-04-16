import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap'

/*
    Carousel slide for the "Explore Department" page
*/
const ExploreDpt = (props) => {
    return (
        <div style={{ width: '100%', height: '100%', padding: "20px 80px"}}>
            <div style={{height: '9%', margin: '10px'}}>
                <h2 style={{fontSize: '2rem', 'float': 'left', margin: '30px 0px 30px 0px'}}>EXPLORE OUR DEPARTMENT</h2>
            </div>
            <CardDeck style={{textAlign: 'left', 'float': 'left', margin: '0px'}}>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/ExploreDpt/I1.jpg" />
                    <Card.Body>
                        <Card.Title>Neurosurgery Residency</Card.Title>
                        <Card.Text>
                            <h3>Resident Education</h3>
                            <p>
                                We are an ACGME-accredited neurosurgery residency program with 3 residents per year.
                            </p> 
                            <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>LEARN MORE</Button>
                            <Button href="https://neurosurgery.ufl.edu/residency/about-our-program/applicants/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>APPLY</Button>
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
                            <Button href="http://com-neurosurgery-a2.sites.medinfo.ufl.edu/research/clinical-trials/" style={{'float':'left', margin: '0px 7px 0px 0px'}}>CLINICAL TRIALS</Button>
                            <Button href="http://com-neurosurgery-a2.sites.medinfo.ufl.edu/research/laboratories/" style={{'float':'left', margin: '0px 0px 0px 7px'}}>LABORATORIES</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default ExploreDpt
