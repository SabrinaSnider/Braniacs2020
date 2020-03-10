import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap'

const ExploreDpt = (props) => {
    return (
        <div style={{'backgroundColor': '#EAEAEA', width: '100%', height: '100%', padding: "20px 80px"}}>
            <CardDeck style={{height: '90%', textAlign: 'left'}}>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/ExploreDpt/I1.jpg" />
                    <Card.Body>
                        <Card.Title>Neurosurgery Residency</Card.Title>
                        <Card.Text>
                            <h3>Resident Education</h3>
                            <p>
                                We are an ACGME-accredited neurosurgery residency program with 3 residents per year.
                            </p>
                            <Button style={{'float':'left', margin: '0px 7px 0px 0px'}}>LEARN MORE</Button>
                            <Button style={{'float':'left', margin: '0px 0px 0px 7px'}}>APPLY</Button>
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
                            <Button style={{'float':'left', margin: '0px 7px 0px 0px'}}>CLINICAL TRIALS</Button>
                            <Button style={{'float':'left', margin: '0px 0px 0px 7px'}}>LABORATORIES</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default ExploreDpt