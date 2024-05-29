import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import {useState, useEffect} from 'react'
import { ADD_COMPLAINT } from '../utils/mutations';

export default function GrievanceForm() {
    
    const [sendComplaint, {error, data}] = useMutation(ADD_COMPLAINT)

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
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const grievanceSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
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

    return(
        <>
            <Container>
                <form
                    onChange={handleChange}>
                    {/* The person's name */}
                    <Row>
                        <Col className='mb-3' xs={12} md={3}>
                            <label htmlFor="firstNameInput" className="form-label">
                                First Name
                            </label>
                            <input
                                name='firstName' 
                                type="text" 
                                className="form-control" id="firstNameInput" 
                                placeholder="First Name" />
                        </Col>
                        <Col className='mb-3' xs={12} md={3}>
                            <label htmlFor="lastNameInput" className="form-label">
                                Last Name
                            </label>
                            <input
                                name='lastName' 
                                type="text" 
                                className="form-control" id="lastNameInput" 
                                placeholder="Last Name" />
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
                                placeholder="example@gmail.com" />
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
                                className="form-control" id="phoneNumberInput" placeholder="Phone Number" />
                        </Col>
                    </Row>
                    {/* Date and Time of the call */}
                    <Row className='mb-3'>
                        <Col xs={12} md={3}>
                            <label className='p-2' htmlFor="dateOfCall">Date of Call: </label>
                            <input
                                name="date" 
                                type="date" 
                                id="dateOfCall" />
                        </Col>
                        <Col xs={12} md={3}>
                            <label className='p-2' htmlFor='timeOfCall'> Time of Call: </label>
                            <input 
                                name='time'
                                type='time' 
                                id='timeOfCall' />
                        </Col>
                    </Row>
                    {/* The nature of Grievance (checkboxes) */}
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <h2>Nature of Grievance</h2>
                            <div className='p-2'>
                                <input
                                    name='grievance' 
                                    className="form-check-input " 
                                    type="checkbox" 
                                    value="Inadequate response" 
                                    id="responseGrievance" />
                                <label 
                                    className="form-check-label checkbox-margin" htmlFor="responseGrievance">
                                        Inadequate response
                                </label>
                            </div>
                            <div className='p-2'>
                                <input
                                    name='grievance' 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="Lack of empathy" 
                                    id="empathyGrievance" />
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
                                    type="checkbox" 
                                    value="Misinformation provided" 
                                    id="misinformationGrievance" />
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
                                    type="checkbox" 
                                    value="Other" 
                                    id="otherGrievance" />
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
                                Who was involved?
                            </label>
                            <textarea
                                name='namesOfInvolved' 
                                className="form-control" 
                                id="namesOfInvolved" 
                                rows="3"/>
                        </Col>
                    </Row>
                    {/* Description of the Grievance */}
                    <Row className="mb-3">
                        <Col xs={12} md={6} className='form-check'>
                            <label htmlFor="grievanceTextArea" className="form-label"> 
                                Describe your grievance
                            </label>
                            <textarea
                                name='description' 
                                className="form-control" 
                                id="grievanceTextArea" 
                                rows="3"/>
                        </Col>
                    </Row>
                    {/* Impact on you */}
                    <Row className="mb-3">
                        <Col xs={12} md={6} className='form-check'>
                            <label htmlFor="impactTextArea" className="form-label"> 
                                Impact on you
                            </label>
                            <textarea
                                name='impact' 
                                className="form-control" 
                                id="impactTextArea" 
                                rows="3"/>
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
                            rows="3"/>
                        </Col>
                    </Row>
                    {/* Confidentiality */}
                    <Row className='mb-3'>
                        <Col xs={12} md={6}>
                        <label htmlFor="confidentialityTextArea" className="form-label"> 
                            Confidentialty
                        </label>
                        <textarea
                            name='confidentiality' 
                            className="form-control" 
                            id="confidentialityTextArea" 
                            rows="3"/>
                        </Col>
                    </Row>
                    <Button
                        onClick={grievanceSubmit} 
                        type='submit' 
                        className='btn btn-primary'>
                        Submit
                    </Button>
                </form>
            </Container>
        </>
    )
}