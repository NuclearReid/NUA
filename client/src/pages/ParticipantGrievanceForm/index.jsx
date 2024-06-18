import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import GrievanceForm from '../../components/GrievanceForm';

export default function ParticipantGrievanceForm() {
    

    return(
        <>
            <div className='mt-5 justify-content-between'>
                <h1 className='text-center m-3 p-4'>Participant Grievance Form</h1>
                <Row className="w-100 scrollable-grievance mb-5">
                    <Col xs={12} md={6}>
                        <p>
                            Have you had an issue with our hotline/service? Please fill out this form and send it to and we will investigate what happened. This form can be completely confidential if you don't want your infomation included with it.
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='scrollable-grievance text-start align-content-center bg-light rounded-5'>
                            <GrievanceForm />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}