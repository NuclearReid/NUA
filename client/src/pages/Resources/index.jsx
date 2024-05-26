import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CommunityGraphics from '../../components/communityGraphics';

export default function Resources() {
    return (
        <>
            {/* NUA documents */}
            <Container className="mt-5">
                <Row className="text-center mb-5">
                    <Col>
                        <h1>Resources</h1>
                        <h2 className='border-bottom pb-3'>Printable Outreach Material</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Card className="mb-4 text-center">
                            <Card.Title className='fs-2'>Never Use Alone Flyer</Card.Title>
                            <Card.Img variant="top" src="../../../src/assets/NUAFlyer.png" alt="Never Use Alone Flyer" />
                            <Card.Body>
                                <Button variant="primary" href="../../../src/assets/NUAFlyer.png" download>Download Flyer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className="mb-4 text-center">
                            <Card.Title className='fs-2 pb-3'>Never Use Alone Business Card</Card.Title>
                            <Card.Img variant="top" src="../../../src/assets/singleBusinessCard.png" alt="Never Use Alone Business Card" />
                            <Card.Body>
                                <p>With the business card file, the single card download is to be used for printing professional cards. The other, is setup to print 8 cards on one sheet of paper. Most orgs are choosing this option, and printing them on regular printing paper, and putting them in with their overdose reversal kits.</p>
                                <Button className='p-2 m-2' variant="primary" href="../../../src/assets/singleBusinessCard.png" download>Download Single Business Card</Button>
                                <Button className='p-2 m-2' variant="primary" href="../../../src/assets/multipleBusinessCard.png" download>Download Multiple Business Cards</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='mb-4 p-1 text-center'>
                            <Card.Title className='fs-2 pb-3'>Community Made Graphics</Card.Title>
                            {/* Community carosel */}
                            <CommunityGraphics />
                            <Card.Body>
                                <p> NUA's graphics are created by volunteers, people like you that support us on social media. You may use NUA images royalty-free under Creative Commons licensing. To download, right-click on any image, then click on Save Image As, and click Save. </p>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}