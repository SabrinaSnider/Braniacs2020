import React from 'react';
import { CardDeck, Card } from 'react-bootstrap'

/*
    Carousel slide for the "Patient Care" page
*/
const PatientCare = (props) => {
    return (
        <div style={{'backgroundColor': '#EAEAEA', padding: "20px 80px"}}>
            <CardDeck style={{textAlign: 'left'}}>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/I1.jpg" />
                    <Card.Body>
                        <Card.Title>NEW PATIENT APPOINTMENTS</Card.Title>
                        <Card.Text>
                            <h3>(352) 273-6990</h3>
                            <p>Established Patients: (352) 273-9000</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Make an Appointment</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/I2.jpg" />
                    <Card.Body>
                        <Card.Title>Neurosurgery</Card.Title>
                        <Card.Text>
                            <h3>Patient Care</h3>
                            <p>
                                The physicians of the clinical faculty of the Department of Neurosurgery at the 
                                University of Florida provide outstanding care for patients with neurological 
                                illness via a team approach.
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Look-up an Adult Disease or Condition</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/PatientCare/I3.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <h3>Pediatric Neurosurgery</h3>
                            <p>
                                From the most complex brain and spinal disorders requiring the most 
                                challenging interventions to more common conditions and procedures, our 
                                expert team of pediatric neurosurgeons and neurosurgery nurse practitioners 
                                offers the complete spectrum of multidisciplinary care.
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Look-up a Pediatric Disease or Condition</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
}

export default PatientCare