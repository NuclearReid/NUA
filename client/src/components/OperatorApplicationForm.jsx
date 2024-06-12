import {Container, Form, Row, Col, Button, FormGroup, FormLabel, FormCheck} from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import {useState, useEffect} from 'react';
import { OPERATOR_APPLICATION } from '../utils/mutations';



export default function OperatorApplicationForm() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeOptions = ['Morning', 'Evening', 'Night', 'Not Available'];
    const [allFilled, setAllFilled] = useState(true);
    const [unfilledFields, setUnfilledFields] = useState([]);


    const [sendApplication, {error, data}] = useMutation(OPERATOR_APPLICATION);
    const [formState, setFormState] = useState({
        email: '',
        name: '',
        over21: '',
        phoneNumber: '',
        resident: '',
        nightOwl: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: '',
        SUD: '',
        facebook: '',
        firstPerson: '',
        harmReductionEXP: '',
        harmReductionExplain: '',
        treatmentCenter: '',
        mandatedReporter: '',
        recovery: '',
        endGoal: '',
        specialSkills: '',
        why: '',
        mandysLine: ''
    });
    
    // makes sure all the required sections are filled out
    useEffect(() => {
        const fieldsToValidate = ['email', 'name', 'over21', 'phoneNumber', 'resident', 'nightOwl', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'SUD', 'firstPerson', 'harmReductionEXP', 'treatmentCenter', 'mandatedReporter', 'recovery', 'endGoal', 'why', 'mandysLine']
        // basically cycles through the required fields and if they're all filled in then 'isAllFilled is true and the submit button will submit to the database
        const isAllFilled = fieldsToValidate.every(key => formState[key].trim() !== '');
        // I'm checking which ones haven't been filled so i can send that data to the modal & make it easy for the user to see what they left out
        const unfilled= fieldsToValidate.filter(key => formState[key].trim() === '');
        setUnfilledFields(unfilled);
        setAllFilled(isAllFilled);
    }, [formState]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const applicationSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formState);
            await sendApplication({
                variables: {
                    ...formState
                }
            });
            setFormState({
                email: '',
                name: '',
                over21: '',
                phoneNumber: '',
                resident: '',
                nightOwl: '',
                monday: '',
                tuesday: '',
                wednesday: '',
                thursday: '',
                friday: '',
                saturday: '',
                sunday: '',
                SUD: '',
                facebook: '',
                firstPerson: '',
                harmReductionEXP: '',
                harmReductionExplain: '',
                treatmentCenter: '',
                mandatedReporter: '',
                recovery: '',
                endGoal: '',
                specialSkills: '',
                why: '',
                mandysLine: '',
            });
        } catch (error) {
            console.error(error)
        }
    }

    const buttonProps = allFilled
    ? { onClick: applicationSubmit, type: 'submit', className: 'btn btn-primary mb-5', 'data-bs-toggle': 'modal', 'data-bs-target': '#submittedModal', children:'Submit my application!'  }
    : { type: 'button', className: 'btn btn-primary mb-5', 'data-bs-toggle': 'modal', 'data-bs-target': '#unfilledModal', children: 'Click me to see what still needs to be completed' };

    return (
        <>
        {/* make the yes/no questions radio buttons. Keep the availability as a drop down */}
        {/* maybe make a scroll effect on the right side of the screen to let them know how much further? */}
            
            <Container>
                {/* The application title */}
                <Row>
                    <Col xs={12} md={5}>
                        <h1>Operator Application Form </h1>
                    </Col>
                </Row>

                {/* start of the form */}
                <form>
                    {/* Their name value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'> 
                                Name <span style={{color: 'red'}}>*</span>
                            </label>
                            <input
                                name='name'
                                type='text'
                                className='form-control'
                                placeholder='Full Name'
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    {/* Theie email  value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Email<span style={{color: 'red'}}>*</span>    
                            </label>
                            <input
                                className='form-control'
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </Col>
                        
                    </Row>          
                    {/* their phone number value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                                <label className='form-label fs-3'>
                                    Phone Number <span style={{color: 'red'}}>*</span>
                                </label>
                                <div className='form-text'>
                                    Please enter the best number to reach you on. This should also be the number you will be taking calls on so that we have it on file if we need to contact you.
                                </div>
                                <input
                                    name='phoneNumber'
                                    type='text'
                                    className='form-control'
                                    placeholder='Phone Number'
                                    value={formState.phoneNumber}
                                    onChange={handleChange}
                                />                        
                        </Col>
                    </Row>
                    {/* type of application */}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Is this application for the NUA hotline, Mandy's Line, or both <span style={{color: 'red'}}>*</span>
                            </label>
                            <div className="form-floating">
                                <select
                                    name='mandysLine' 
                                    className="form-select" 
                                    aria-label="Floating label select example"
                                    onChange={handleChange}
                                    value={formState.SUD}
                                >
                                        <option value="">Choose</option>
                                        <option value="The NUA hotline">The NUA Hotline</option>
                                        <option value="Mandy's Line">Mandy's Line</option>
                                        <option value="Both">Both</option>
                                </select>
                                <label 
                                    className='form-label'
                                    htmlFor='floatingSelect'
                                >
                                    Required
                                </label>
                            </div>
                        </Col>
                    </Row>
                    {/* over 21? checked and onChange done*/}
                    {/* the radio buttons are set up so if their checked it sets the formState (over21 in this case) to either yes or no */}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Are you 21 or over? <span style={{color: 'red'}}>*</span>
                            </label>
                            <FormCheck
                                value={'yes'}
                                className='fs-5'
                                type="radio"
                                label="Yes"
                                name="over21"
                                id="over21-yes"
                                onChange={handleChange}
                                checked={formState.over21 === 'yes'}
                            />
                            <FormCheck
                                value={'no'}
                                className='fs-5'
                                type="radio"
                                label="No"
                                name="over21"
                                id="over21-no"
                                onChange={handleChange}
                                checked={formState.over21 === 'no'}
                            />
                        </Col>
                    </Row>
                    {/* us resident checked and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Do you live within the US? <span style={{color: 'red'}}>*</span>
                            </label>
                            <p className='form-text'>
                                All operators must be within the US. If you're in Canada, check with NORS, at <a href='https://www.nors.ca/' target="_blank" rel='noopener noreferrer'>www.nors.ca</a>. They're a Canadian organization that runs a Canadian national overdose response line. There is also the <a href='https://www.brave.coop/overdose-detection-app' target='_blank' rel='noopener'>Brave App</a>. It's an app based overdose response line that is always in need of good operators
                            </p>
                            <FormCheck
                                value={'yes'}
                                className='fs-5'
                                type="radio"
                                label="Yes"
                                name="resident"
                                id="resident-yes"
                                onChange={handleChange}
                                checked={formState.resident === 'yes'}
                            />
                            <FormCheck
                                value={'no'}
                                className='fs-5'
                                type="radio"
                                label="No"
                                name="resident"
                                id="resident-no"
                                onChange={handleChange}
                                checked={formState.resident === 'no'}
                            />
                        </Col>
                    </Row>
                    {/* night Owl? checked and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Are you a night owl? <span style={{color: 'red'}}>*</span>
                            </label>
                            <p className='form-text'>
                                If you're not a person that stays up late, it's ok. It will not disqualify you. We're always in need of people that can take calls late at night, though. So, if you're a night owl, and up late, that would be really helpful!
                            </p>
                            <FormCheck
                                value={'yes'}
                                className='fs-5'
                                type="radio"
                                label="Yes"
                                name="nightOwl"
                                id="nightOwl-yes"
                                onChange={handleChange}
                                checked={formState.nightOwl === 'yes'}
                            />
                            <FormCheck
                                value={'no'}
                                className='fs-5'
                                type="radio"
                                label="No"
                                name="nightOwl"
                                id="nightOwl-no"
                                onChange={handleChange}
                                checked={formState.nightOwl === 'no'}
                            />
                        </Col>
                    </Row>
                    {/* time available checked and onChange done*/}
                    {/* this is ugly and needs to be cleaned up */}
                    <Row>
                        <Col xs={12} md={5}>
                            <h3> What is Your Availability <span style={{color: 'red'}}>*</span></h3>
                            {daysOfWeek.map(day => (    
                                    <FormGroup className='mb-3' key={day}>                        
                                            <FormLabel className='fs-3 m-2'>
                                                {day}
                                            </FormLabel>
                                            <div className="form-floating">
                                                <select
                                                    name={day.toLocaleLowerCase()} 
                                                    className="form-select" 
                                                    aria-label="Floating label select example"
                                                    onChange={handleChange}
                                                    value={formState[day.toLocaleLowerCase()]}    
                                                >
                                                        <option value="">Choose</option>
                                                        {timeOptions.map(option => (
                                                            <option 
                                                                key={option} 
                                                                value={option}>
                                                                    {option}
                                                            </option>
                                                        ))}
                                                </select>
                                                <label 
                                                    className='form-label'
                                                    htmlFor='floatingSelect'
                                                >
                                                    Required
                                                </label>
                                            </div>
                                    </FormGroup>
                            ))}
                        </Col> 
                    </Row>
                    {/* Experience in SUD select and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Do you have lived experience in SUD? <span style={{color: 'red'}}>*</span>
                            </label>
                            <p className='form-text'>
                            We prefer our operators have first person, lived experience. While we understand that being the friend or family member of a person with a substance use disorder, can be extremely difficult, only a person that has lived it, can understand. We DO ACCEPT applicants that lived it through their friend, or family member, though! <b>Everyone that has the desire to help, is welcome with us!</b>
                            </p>
                            <div className="form-floating">
                                <select
                                    name='SUD' 
                                    className="form-select" 
                                    aria-label="Floating label select example"
                                    onChange={handleChange}
                                    value={formState.SUD}
                                >
                                        <option value="">Choose</option>
                                        <option value="First Person Experience">Yes, first hand lived experience</option>
                                        <option value="Third Person Experience">No, but I've been through it with a friend or family member</option>
                                        <option value="no Experience">No, I have no experience with SUD</option>
                                </select>
                                <label 
                                    className='form-label'
                                    htmlFor='floatingSelect'
                                >
                                    Required
                                </label>
                            </div>
                        </Col>
                    </Row>
                    {/* Facebookpage? value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Do you have a Facebook Page?
                            </label>
                            <p className='form-text'>
                            We do not base our decision on your social media post's. We're mainly looking for obvious signs that a person may not be a good fit for NUA (racism, hate, etc.). It's another way for us to ensure our callers are safe with anyone that answers their call.  While it is extremely helpful to us in our screening process, not having a FB page is <b>NOT AN AUTOMATIC DISQUALIFICATION.</b>
                            </p>
                            <input
                                className='form-control'
                                name='facebook'
                                type='text'
                                placeholder='Optional'
                                value={formState.facebook}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    {/* first person langauge checked and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Do you know what first person language is?<span style={{color: 'red'}}>*</span>
                            </label>
                            <div>
                            <FormCheck
                                className='fs-5'
                                type="radio"
                                label="Yes"
                                name="firstPerson"
                                id="firstPersonLanguage-yes"
                                value='yes'
                                onChange={handleChange}
                                checked={formState.firstPerson === 'yes'}
                            />
                            <FormCheck
                                className='fs-5'
                                type="radio"
                                label="No"
                                name="firstPerson"
                                id="firstPersonLanguage-no"
                                value='no'
                                onChange={handleChange}
                                checked={formState.firstPerson === 'no'}
                            />
                        </div>
                        </Col>
                    </Row>
                    {/* harm reduction exp checked and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={6}>
                            <label className='form-label fs-3'>
                                Do you know have harm reduction experience?<span style={{color: 'red'}}>*</span>
                            </label>
                            <div>
                                <FormCheck
                                    value='yes'
                                    className='fs-5'
                                    type="radio"
                                    label="Yes"
                                    name="harmReductionEXP"
                                    id="harmReductionEXP-yes"
                                    onChange={handleChange}
                                    checked={formState.harmReductionEXP === 'yes'}
                                />
                                <FormCheck
                                    value='no'
                                    className='fs-5'
                                    type="radio"
                                    label="No"
                                    name="harmReductionEXP"
                                    id="harmReductionEXP-no"
                                    onChange={handleChange}
                                    checked={formState.harmReductionEXP === 'no'}
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* said use to harm reduction? explain value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                If you answered yes above, please explain here.
                            </label>
                            <input
                                className='form-control'
                                name='harmReductionExplain'
                                type='text'
                                placeholder='Optional'
                                value={formState.harmReductionExplain}
                                onChange={handleChange}
                            />                        
                        </Col>
                    </Row>
                    {/* treatment center checked and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                        <label className='form-label fs-3'>
                            Are you in ANY WAY affiliated with a treatment center?<span style={{color: 'red'}}>*</span>
                            </label>
                            <div>
                                <FormCheck
                                    value={'yes'}
                                    className='fs-5'
                                    type="radio"
                                    label="Yes"
                                    name="treatmentCenter"
                                    id="treatmentCenter-yes"
                                    onChange={handleChange}
                                    checked={formState.treatmentCenter === 'yes'}
                                />
                                <FormCheck
                                    value={'no'}
                                    className='fs-5'
                                    type="radio"
                                    label="No"
                                    name="treatmentCenter"
                                    id="treatmentCenter-no"
                                    onChange={handleChange}
                                    checked={formState.treatmentCenter === 'no'}
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* Mandated Reporter checked and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                        <label className='form-label fs-3'>
                            Are you a mandated reporter?<span style={{color: 'red'}}>*</span>
                        </label>
                        <p className='form-text'>
                            We understand that most of you would never report someone for their substance use, and this disqualifies a lot of good people. Having mandated reports answering calls though, could cause multiple problems. 1. You would be at risk of having to defy the oath you've taken as a mandated reporter. 2. If our callers thought that the person answering their call, was legally obligated to report them if children are present, no one would ever call. 
                        </p>
                            <div>
                                <FormCheck
                                    value={'yes'}
                                    className='fs-5'
                                    type="radio"
                                    label="Yes"
                                    name="mandatedReporter"
                                    id="treatmentCenter-yes"
                                    onChange={handleChange}
                                    checked={formState.mandatedReporter === 'yes'}
                                />
                                <FormCheck
                                    value={'no'}
                                    className='fs-5'
                                    type="radio"
                                    label="No"
                                    name="mandatedReporter"
                                    id="treatmentCenter-no"
                                    onChange={handleChange}
                                    checked={formState.mandatedReporter === 'no'}
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* What does Recovery mean? value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                What does recovery mean to you?<span style={{color: 'red'}}>*</span>
                            </label>
                            <textarea
                                name='recovery'
                                className='form-control'
                                value={formState.recovery}
                                onChange={handleChange}
                            />                            
                        </Col>
                    </Row>
                    {/* the end goal! options and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                        <label className='form-label fs-3'>
                        Do you think that a person who uses drugs, should have an end goal of complete abstinence?<span style={{color: 'red'}}>*</span>
                            </label>
                            <div>
                                <FormCheck
                                    value={'yes'}
                                    className='fs-5'
                                    type="radio"
                                    label="Yes"
                                    name="endGoal"
                                    id="treatmentCenter-yes"
                                    onChange={handleChange}
                                    checked={formState.endGoal === 'yes'}
                                />
                                <FormCheck
                                    value={'no'}
                                    className='fs-5'
                                    type="radio"
                                    label="No"
                                    name="endGoal"
                                    id="treatmentCenter-no"
                                    onChange={handleChange}
                                    checked={formState.endGoal === 'no'}
                                />
                                <FormCheck
                                    value={'Not My Decision'}
                                    className='fs-5'
                                    type="radio"
                                    label="Not my decision"
                                    name="endGoal"
                                    id="endGoal-notMyDecision"
                                    onChange={handleChange}
                                    checked={formState.endGoal === 'Not My Decision'}
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* Special Skills value and onChange done*/}
                    <Row>
                        <Col className='mb-3' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Do you have any special skills?
                            </label>
                            <p className='form-text'>
                                Please enter any special skills, certifications, or other experience you have
                            </p>
                            <textarea
                                name='specialSkills'
                                className='form-control'
                                placeholder='Optional'
                                value={formState.specialSkills}
                                onChange={handleChange}                         
                            />
                        </Col>
                    </Row>
                    {/* why do you want to be an NUA operator? value and onChange done*/}
                    <Row>
                        <Col className='mb-5' xs={12} md={5}>
                            <label className='form-label fs-3'>
                                Why do you want to be an NUA operator? <span style={{color: 'red'}}>*</span>
                            </label>
                            <textarea 
                                name='why'
                                className='form-control'
                                value={formState.why}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    {/* the submit button */}
                    <Button
                        {...buttonProps}
                    />  
                </form>

            </Container>
            {/* more needs to be done modal */}
            <div className="modal fade" id="unfilledModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Not all required sections were filled out
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {unfilledFields.map(field => (
                                <li key={field}>{
                                    field}
                                </li>
                        ))}
                        </ul>                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            {/* submitted application modal */}
            <div className="modal fade" id="submittedModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Your application has been submitted!
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">               
                        <p>We will be in touch with you soon as we can!</p>  
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
