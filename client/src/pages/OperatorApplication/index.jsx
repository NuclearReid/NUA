import {Row, Col} from 'react-bootstrap'
import OperatorApplicationForm from "../../components/OperatorApplicationForm"
import volunteerOperatorPic from '../../assets/volunteerOperator.png'

export default function OperatorApplication() {

    return(
        <>
            <div className="d-flex flex-column align-items-center" style={{height: '100%'}}>
                <div>
                    <img src={volunteerOperatorPic} className="w-100" alt='volunteer operator image'/>
                </div>
                <div className="d-flex justify-content-between p-3">
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="w-100 scrollable-application mb-5">
                                <h1 className='text-center'> All About this Application!</h1>
                                <p className='text-start'>
                                We believe our callers are most comfortable with operators that have “been there”. Do you have lived experience? Do you have harm reduction experience? Can you stay calm during an emergency? Do you want to be involved with saving lives? If so, <strong>we need you!. </strong>
                                </p>
                                <h2>
                                    Requirements
                                </h2>
                                <p>
                                Abstinence is not required. We believe that people who use substances are just as valuable as people who do not. With our service, we actually prefer that our operators have experience with drug use. 
                                </p>
                                <h2>
                                    Duties and Responsibilities
                                </h2>
                                <p>
                                As a national overdose prevention center volunteer call center operator, you would be responsible for answering incoming calls on your cell phone from anywhere in the country. You will follow a call script asking callers questions to establish their substance use safety plan. You will remain on the call while the person uses their substance and just talk with them. If the caller experiences an adverse drug event and stops responding, then you will contact emergency medical services and provide the caller's location. 
                                </p>
                                <h2>
                                    Hours and Availability
                                </h2>
                                <p>
                                    You choose your availability to receive calls. There are no designated “shifts”. If there are times when you become unavailable, or you don’t want to be alerted to incoming calls, just let us know and we can automatically skip your number.
                                </p>
                                <h2>
                                    Disqualifications (Automatic)
                                </h2>
                                <p>
                                    We do not accept applications from employees of <strong>substance use disorder treatment facilities</strong> who work in marketing, business development or outreach coordinator positions.
                                </p>
                                <h2>
                                    Trauma Warning
                                </h2>
                                <p>
                                    This position is highly stressful and can be traumatic, at times. While the vast majority of calls end safely, you will likely detect and respond to an adverse drug event call where the person becomes unresponsive. All you can do is call for help, then listen and talk to the caller while you wait for emergency medical services to arrive. If you cannot handle crisis situations, this probably isn’t the position for you and that’s okay.
                                </p>
                                <h2>
                                    Mental Health Care
                                </h2>
                                <p>
                                    We have mental health professionals that donate their time to help our volunteers work through traumatic events or to decompress from a high stress call. <strong>This position can be extremely mentally and emotionally demanding!</strong>  
                                </p>
                                <h2>
                                    Still want to apply?
                                </h2>
                                <p>
                                    If you have lived experience in substance use, harm reduction, and can stay calm in an emergency, please fill out an application.  We will get back to you asap. If your application is accepted, we will contact you for a phone interview, and schedule operator training. Thank you for your interest in helping out. We look forward to speaking with you!
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="w-100 scrollable-application bg-light flex-grow-1">
                                <OperatorApplicationForm />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}