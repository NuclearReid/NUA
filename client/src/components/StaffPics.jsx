import {Container, Row, Col} from 'react-bootstrap';
import KelseyHeadShot from '../assets/KelseyHeadShot.png'
import MariamHeadShot from '../assets/MariamHeadShot.png'
import MikeHeadShot from '../assets/MikeHeadShot.png'

export default function StaffPics() {

    return (
        <>
            <h2 className='text-center mt-5'> Meet our Professional Team</h2>
            <Row className='p-5'>
                    <Col xs={12} md={4} className='hover-grow'>
                        <picture>
                            <img src={KelseyHeadShot} className="headShotImg rounded-circle  p-md-5 img-fluid" alt="Headshot of kelsey"/>
                        </picture>
                        <h3 className='text-center fs-1'>Kelsey Burger</h3>
                        <h4><strong>Get an image thats a square to make this look better</strong></h4>
                        <h4 className='mb-3 fs-4'>
                            Director Of Operations at NUA, & Volunteer Coordinator for Mandy’s Line
                        </h4>
                        <p>
                            Kelsey is not only our volunteer coordinator for NUA, she is also a harm reductionist, and the Director Of Operations for our Never Use Alone Line. She helps to run Mandy's Line and takes calls as well. So, when you call, if you are connected to Kelsey, this is who you're talking to!
                        </p>
                    </Col>
                    <Col xs={12} md={4} className='hover-grow'>
                        <picture>
                            <img src={MariamHeadShot} className="headShotImg rounded-circle p-md-5 img-fluid" alt="Headshot of kelsey"/>
                        </picture>
                        <h3 className='text-center'>Mariam Riley</h3>
                        <h4 className='mb-3 fs-4'>
                            Harm Reduction Consultant, & Volunteer Coordinator  
                        </h4>
                        <p>
                            Miriam is a harm reductionist from the Nashville area. She is founder of an underground harm reduction program in Nashville, an NUA operator, NUA volunteer coordinator, and Mandy's Line operator!
                        </p>
                        
                    </Col>
                    <Col xs={12} md={4} className='hover-grow'>
                        <picture>
                            <img src={MikeHeadShot} className="headShotImg rounded-circle p-md-5 img-fluid" alt="Headshot of kelsey"/>
                        </picture>
                        <h3 className='text-center'>Mike</h3>
                        <h4 className='mb-3 fs-4'>
                            President / Founder
                        </h4>
                        <p>
                            Mike is the founder of NUA, a harm reductionist, and person with lived experience in IV drug use. Outside of NUA, he's a father to two awesome kids, a 23yr old son, and a 9yr old daughter. 
                        </p>
                    </Col>
            </Row> 
        </>
    )
}