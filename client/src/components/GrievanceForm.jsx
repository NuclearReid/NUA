import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import {useState, useEffect} from 'react'
import { ADD_COMPLAINT } from '../utils/mutations';

export default function GrievanceForm() {
    
    const [sendComplaint, {error, data}] = useMutation(ADD_COMPLAINT)
    const [allFilled, setAllFilled] = useState(true);
    const [unfilledFields, setUnfilledFields] = useState([]);

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        grievance: '',
        namesOfInvolved: '',
        description: '',
        impact: '',
        suggestions: '',
        confidentiality: ''
    });

    // This is used to make sure the required sections are entered
    useEffect(() => {
        const fieldsToValidate = ['date', 'time', 'namesOfInvolved', 'description', 'impact', 'confidentiality']
        // basically cycles through the required fields and if they're all filled in then 'isAllFilled is true and the submit button will submit to the database
        const isAllFilled = fieldsToValidate.every(key => formState[key].trim() !== '');
        // I'm checking which ones haven't been filled so i can send that data to the modal & make it easy for the user to see what they left out
        const unfilled = fieldsToValidate.filter(key => formState[key].trim() === '');
        setUnfilledFields(unfilled);
        setAllFilled(isAllFilled);
    }, [formState]); // This will run every time formState changes

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    

    const grievanceSubmit = async (event) => {
        event.preventDefault();
        try {
            
            console.log(formState);

            await sendComplaint({
                variables: {
                    ...formState
                }
            });
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                date: '',
                time: '',
                grievance: '',
                namesOfInvolved: '',
                description: '',
                impact: '',
                suggestions: '',
                confidentiality: ''
            });
        } catch (error) {
            console.error(error);
        }
    }
    // this is used with the useEffect. basically, if all the required sections are filled out then the button submits. if not, the button triggers the modal
    const buttonProps = allFilled
            ? { onClick: grievanceSubmit, type: 'submit', className: 'btn btn-primary' }
            : { type: 'button', className: 'btn btn-primary', 'data-bs-toggle': 'modal', 'data-bs-target': '#exampleModal' };

    return(
        <>
            <Container>
                <form
                    onChange={handleChange}
                    className='needs-validation mb-5'
                    noValidate
                >
                    {/* The person's name */}
                    <Row>
                        <Col className='mb-3' xs={12} md={3}>
                            <label htmlFor="firstNameInput form-label" className="form-label">
                                First Name
                            </label>
                            <input
                                name='firstName' 
                                type="text" 
                                className="form-control" 
                                id="firstNameInput" 
                                placeholder="First Name" 
                                value={formState.firstName}
                                onChange={handleChange}
                            />
                            <div className="form-text">Optional</div>

                        </Col>
                        <Col className='mb-3' xs={12} md={3}>
                            <label htmlFor="lastNameInput form-label" className="form-label">
                                Last Name
                            </label>
                            <input
                                name='lastName' 
                                type="text" 
                                className="form-control" 
                                id="lastNameInput" 
                                placeholder="Last Name"
                                value={formState.lastName}
                                onChange={handleChange}
                            />
                            <div className="form-text">Optional</div>
                        </Col>
                    </Row>
                    {/* Their email */}
                    <Row>
                        <Col className='mb-3' xs={12} md={3}>
                            <label htmlFor="emailInput" className="form-label">
                                Email
                            </label>
                            <input
                                name='email'
                                type="email" 
                                className="form-control" 
                                id="emailInput" 
                                placeholder="example@gmail.com" 
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <div className="form-text">Optional</div>
                        </Col>
                        {/* Their phone number */}
                        {/*  Need to force the phone number syntax later on */}
                        <Col className='mb-3' xs={12} md={3}>
                            <label htmlFor="phoneNumberInput" className="form-label">
                                Phone Number
                            </label>
                            <input
                                name='phoneNumber' 
                                type="tel" 
                                className="form-control" 
                                id="phoneNumberInput" 
                                placeholder="Phone Number" 
                                value={formState.phoneNumber}
                                onChange={handleChange}
                            />
                            <div className="form-text">Optional</div>
                        </Col>
                    </Row>
                    {/* Date and Time of the call */}
                    <Row className='mb-3'>
                        <Col xs={12} md={3}>
                            <label className='p-2' htmlFor="dateOfCall">Date of Call: <span style={{color: 'red'}}>*</span> </label>
                            <Col xs={12} md={3}>
                                <input
                                    name="date" 
                                    type="date" 
                                    id="dateOfCall"
                                    value={formState.date}
                                    onChange={handleChange}
                                    required 
                                />
                            </Col>
                            
                            <div className="form-text">What day was the call?</div>
                        </Col>
                        <Col xs={12} md={3}>
                            <label className='p-2' htmlFor='timeOfCall'> Time of Call: <span style={{color: 'red'}}>*</span> </label>
                            <Col xs={12} md={3}>
                                <input 
                                    name='time'
                                    type='time' 
                                    id='timeOfCall' 
                                    value={formState.time}
                                    onChange={handleChange}
                                    required 
                                />
                            </Col>
                            
                            <div className="form-text">What time was the call?</div>                        
                        </Col>
                    </Row>
                    {/* The nature of Grievance (checkboxes) */}
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <h2>Nature of Grievance<span style={{color: 'red'}}>*</span></h2>
                            <div className='p-2'>
                                <input
                                    name='grievance' 
                                    className="form-check-input" 
                                    checked = {formState.grievance === "Inadequate response"}
                                    type="radio" 
                                    value="Inadequate response" 
                                    id="responseGrievance"
                                    onChange={handleChange}
                                        
                                />
                                <label 
                                    className="form-check-label checkbox-margin" htmlFor="responseGrievance">
                                        Inadequate response
                                </label>
                            </div>
                            <div className='p-2'>
                                <input
                                    name='grievance' 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="Lack of empathy" 
                                    id="empathyGrievance"
                                    onChange={handleChange} 
                                />
                                <label 
                                    className="form-check-label checkbox-margin" 
                                    htmlFor="empathyGrievance">
                                        Lack of empathy
                                </label>
                            </div>
                            <div className='p-2'>
                                <input
                                    name='grievance' 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="Misinformation provided" 
                                    id="misinformationGrievance" 
                                    onChange={handleChange}
                                    />
                                <label 
                                    className="form-check-label checkbox-margin" 
                                    htmlFor="misinformationGrievance">
                                        Misinformation provided
                                </label>
                            </div>
                            <div className='p-2'>
                                <input
                                    name='grievance' 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="Other" 
                                    id="otherGrievance" 
                                    onChange={handleChange}
                                />
                                <label 
                                    className="form-check-label checkbox-margin" htmlFor="otherGrievance">
                                    Other
                                </label>
                            </div>                        
                        </Col>
                    </Row>
                    {/* Names of the people involved */}
                    <Row className="mb-3">
                        <Col xs={12} md={6} className='form-check'>
                            <label htmlFor="namesOfInvolved" className="form-label"> 
                                Who was involved?<span style={{color: 'red'}}>*</span> 
                            </label>
                            <textarea
                                name='namesOfInvolved' 
                                className="form-control" 
                                id="namesOfInvolved" 
                                rows="3"
                                value={formState.namesOfInvolved}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    {/* Description of the Grievance */}
                    <Row className="mb-3">
                        <Col xs={12} md={6} className='form-check'>
                            <label htmlFor="grievanceTextArea" className="form-label"> 
                                Describe your grievance<span style={{color: 'red'}}>*</span> 
                            </label>
                            <textarea
                                name='description' 
                                className="form-control" 
                                id="grievanceTextArea" 
                                rows="3"
                                value={formState.description}
                                onChange={handleChange}
                                required
                            />
                            <div className="form-text">Provide a detailed account of what transpired during the call and why you are filing a grievance.</div>
                        </Col>
                    </Row>
                    {/* Impact on you */}
                    <Row className="mb-3">
                        <Col xs={12} md={6} className='form-check'>
                            <label htmlFor="impactTextArea" className="form-label"> 
                                Impact on you<span style={{color: 'red'}}>*</span> 
                            </label>
                            <textarea
                                name='impact' 
                                className="form-control" 
                                id="impactTextArea" 
                                rows="3"
                                value={formState.impact}
                                onChange={handleChange}
                                required
                            />
                              <div className="form-text">Explain how the incident has affected you and your well-being</div>
                        </Col>
                    </Row>
                    {/* Other Information */}
                    <h2 className='border-bottom p-3'> Other information </h2>
                    {/* Suggestions for Improvement */}
                    <Row className='mb-3'>
                        <Col xs={12} md={6}>
                        <label htmlFor="suggestionsTextArea" className="form-label"> 
                            Suggestions for Improvement
                        </label>
                        <textarea
                            name='suggestions' 
                            className="form-control" 
                            id="suggestionsTextArea" 
                            rows="3"
                            value={formState.suggestions}
                            onChange={handleChange}
                        />
                        <div className="form-text">Offer any recommendations or suggestions for how the crisis line service could be improved to prevent similar issues in the future</div>
                        </Col>
                    </Row>
                    {/* Confidentiality */}
                    <Row className='mb-3'>
                        <Col xs={12} md={6}>
                        <label htmlFor="confidentialityTextArea" className="form-label"> 
                            Confidentialty <span style={{color: 'red'}}>*</span> 
                        </label>
                        <textarea
                            name='confidentiality' 
                            className="form-control" 
                            id="confidentialityTextArea" 
                            rows="3"
                            value={formState.confidentiality}
                            onChange={handleChange}
                            required
                        />
                        <div className="form-text">Please indicate whether you would like the details of this grievance to be kept confidential</div>
                        </Col>
                    </Row>
                    <Button {...buttonProps}>
                        Submit
                    </Button>
                </form>
            </Container>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </>
    )
}