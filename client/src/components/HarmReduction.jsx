import { Container, Row, Col, Card, Button } from 'react-bootstrap';


export default function HarmReduction() {

    return (
    <Container>
        <Row>
            <Col className='text-center'>
                <h2> Harm Reduction Resources Online </h2>
                <p><b>PLEASE, <a href='https://nextdistro.org/policies' target='_blank' rel='noopener noreferrer'>CLICK HERE</a> TO READ YOUR STATES GOOD SAMARITAN LAW!</b> </p>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Card className="mb-4 text-center">
                    <Card.Title className='fs-1 pb-3'>Next Distro</Card.Title>
                    <Card.Img className='resourceCardImg' variant="top" src="../../../src/assets/nextDistroLogo.png" alt="Next Distro" />
                    <Card.Body>
                        <p> Next Distro is a mail based harm reduction service. They'll mail Naloxone, to anyone, anywhere in the country, totally free of charge. <a href="https://www.naloxoneforall.org/" target='_blank' rel='noopener noreferrer'>Click here </a> to order Naloxone!
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className="mb-4 text-center">
                    <Card.Title className='fs-1 pb-3'>National Harm Reduction Coalition</Card.Title>
                    <Card.Img className='resourceCardImg' variant="top" src="../../../src/assets/nationalHarmReductionCoalitionLogo.png" alt="National Harm Reduction Coalition Logo" />
                    <Card.Body>
                        <p> The National Harm Reduction Coalition website has some great resources and info for anyone wanting to learn more about harm reduction, and what it's all about. <br/>
                        <a href="https://harmreduction.org/" target='_blank' rel='noopener noreferrer'>Click here </a> to visit the National Harm Reduction Coalition.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className="mb-4 text-center">
                    <Card.Title className='fs-1 pb-3'>Brave</Card.Title>
                    <Card.Img className='resourceCardImg' variant="top" src="../../../src/assets/braveLogo.png" alt="Brave Logo" />
                    <Card.Body>
                        <p> The Brave App was created by a great organization that we partner with on a lot of things. The Brave App is an Overdose Detection / Overdose Response App for people who don't like talking on the phone, or only have wifi access. For more information, or to download the Brave App,
                        <a href="https://www.brave.coop/overdose-detection-app" target='_blank' rel='noopener noreferrer'>Click here</a> 
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6}>
                <Card className="mb-4 text-center">
                    <Card.Title className='fs-3 pb-3'>Canadian National Overdose Response Service (NORS)</Card.Title>
                    <Card.Img className='resourceCardImg' variant="top" src="../../../src/assets/norsLogo.png" alt="Brave Logo" />
                    <Card.Body>
                        <p> <a href="https://www.nors.ca/about" target='_blank' rel='noopener noreferrer'>
                            Canadian National Overdose Response Service</a>(NORS), is a 24/7 overdose response line for people who use drugs in Canada. While we can take calls from Canada, it's recommended that anyone calling from Canada, use the NIORS line. You can call us as well though, if that's what you prefer.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}