import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap'

/*
    Carousel slide for the "News and Videos" page
*/
const NewsVideos = (props) => {
    return (
        <div style={{ width: '100%', height: '100%', padding: "20px 80px"}}>
            <div style={{height: '9%', margin: '10px'}}>
                <h2 style={{fontSize: '2rem', 'float': 'left', margin: '30px 0px 30px 0px'}}>RECENT NEWS &amp; VIDEOS</h2>
                <Button href="https://neurosurgery.ufl.edu/category/news/" style={{'float': 'right', margin: '30px 0px 30px 0px'}} >All News &amp; Videos</Button>
            </div>
            <CardDeck style={{textAlign: 'left', 'float': 'left', margin: '0px'}}>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/NewsVideos/I1.jpg" />
                    <Card.Body>
                        <Card.Title>New Director of CTSI: Duane Mitchell, M.D., Ph.D.</Card.Title>
                        <Card.Text>
                            <p>
                                Duane A. Mitchell, M.D., Ph.D., appointed as director of the UF Clinical 
                                and Translational Science Institute, assistant vice president for research…
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <a href="https://www.clickorlando.com/news/local/2020/02/21/how-childhood-cancer-research-is-advancing/?fbclid=IwAR0wrjF-9q07PJKuVEVxhVOe8HELRgn2ld05Y0CvMfkQa84iwWJ-aLYdOjY" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                            <span class="FancyLink__Text">See More</span>
                        </a>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/NewsVideos/I2.jpg" />
                    <Card.Body>
                        <Card.Title>Leading brain tumor experts meet to advance UF…</Card.Title>
                        <Card.Text>
                            <p>
                                Brain tumor experts from the UF Health-led ReMission Alliance convened 
                                for the 2020 ReMission Summit Against Brain Tumors to collaborate in pursuit…
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a href="https://mbi.ufl.edu/2020/03/03/remission2020/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                                <span class="FancyLink__Text">See More</span>
                            </a>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/CarouselHome/NewsVideos/I3.jpg" />
                    <Card.Body>
                        <Card.Title>ASCO Direct</Card.Title>
                        <Card.Text>
                            <p>
                                ASCO Direct April 17th ASCO Direct Immuno-Oncology: Therapeutic 
                                Advances for the Practitioner University of Florida Research and 
                                Academic Center at…
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a href="https://neurosurgery.ufl.edu/2020/02/25/asco-direct/" title="Make an Appointment" class="FancyLink td-n clickable ba-0 FancyLink--blue-light fs-14 fs-16--md ff-gm">
                                <span class="FancyLink__Text">See More</span>
                            </a>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
}

export default NewsVideos
