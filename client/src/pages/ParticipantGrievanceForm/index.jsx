// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import GrievanceForm from '../../components/GrievanceForm';

export default function ParticipantGrievanceForm() {
    

    return(
        <>
            <div className='mt-5'>
                <h1 className='text-center'>Participant Grievance Form</h1>
                <GrievanceForm />
            </div>
        </>
    )
}