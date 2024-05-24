import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Resources() {
    return (
        <>
            <Container className="mt-5">
                <Row className="text-center mb-5">
                    <Col>
                        <h1>Resources</h1>
                        <h2>Printable Outreach Material</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Card className="mb-4 text-center">
                            <Card.Img variant="top" src="../../../src/assets/NUAFlyer.png" alt="Never Use Alone Flyer" />
                            <Card.Body>
                                <Card.Title>Never Use Alone Flyer</Card.Title>
                                <Button variant="primary" href="../../../src/assets/NUAFlyer.png" download>Download Flyer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className="mb-4 text-center">
                            <Card.Img variant="top" src="../../../src/assets/singleBusinessCard.png" alt="Never Use Alone Business Card" />
                            <Card.Body>
                                <Card.Title>Never Use Alone Business Card</Card.Title>
                                <Button className='p-2 m-2' variant="primary" href="../../../src/assets/singleBusinessCard.png" download>Download Single Business Card</Button>
                                <Button className='p-2 m-2' variant="primary" href="../../../src/assets/multipleBusinessCard.png" download>Download Multiple Business Cards</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Work at the harm reduction section */}
            <Container>
                <Row>
                    <Col className='text-center border-top'>
                    <h2> Harm Reduction Resources Online </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Card className='mb-4 text-center'>

                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}