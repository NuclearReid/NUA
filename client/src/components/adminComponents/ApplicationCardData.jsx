import {Card, Container, Button, Row, Col } from 'react-bootstrap'

import {useMutation} from '@apollo/client';
import { DELETE_APPLICATION } from '../../utils/mutations';

export default function ApplicationCardData({application, index, refetch, setActiveIndex, activeIndex, numberOfApplications}) {
    // console.log(application)

    const [deleteApplication, {error}] = useMutation(DELETE_APPLICATION);

    const handleDeleteClick = async (event) => {
        try {const mutationResponse = await deleteApplication({
            variables: {
                _id: application._id,
            }
        });
        if(index === activeIndex && activeIndex > 0) {
            setActiveIndex(prev => prev -1)
        }
        await refetch();
        } catch (error) {
            console.error(error)
        }
    }

    const handleDownloadclick = () => {
        const applicationContent = `
            Name: ${application.name}
            Email: ${application.email}
            NUA or Mandy's Line: ${application.mandysLine}
            Over 21?: ${application.over21}
            Phone Number: ${application.phoneNumber}
            US resident?: ${application.resident}
            Night Owl?: ${application.nightOwl}
            Availability: 
                Monday: ${application.monday}
                Tuesday: ${application.tuesday}
                Wednesday: ${application.wednesday}
                Thursday: ${application.thursday}
                Friday: ${application.friday}
                Saturday: ${application.saturday}
                Sunday: ${application.sunday}
            SUD: ${application.SUD}
            Facebook: ${application.facebook}
            First Person: ${application.firstPerson}
            Harm Reduction Experience: ${application.harmReductionEXP}
            Harm Reduction Explanation: ${application.harmReductionExplain}
            Treatment Center: ${application.treatmentCenter}
            Mandated Reporter: ${application.mandatedReporter}
            Recovery: ${application.recovery}
            End Goal: ${application.endGoal}
            Special Skills: ${application.specialSkills}
            Why: ${application.why}      
        `;
        const element = document.createElement('a');
        const file = new Blob([applicationContent], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = `Application-${application.name}.txt`;

        document.body.appendChild(element);
        element.click();

    }


// make a modal that confirms you want to delete the application
    return (
        <>
            <Container>
                <Card className='p-5 m-0 m-md-5'
                value={application._id}>
                    <Col xs={12} md={6}>
                        <Card.Body>
                            <Card.Title> 
                                Application for {application.name} they are {index+1} of {numberOfApplications}
                            </Card.Title>
                            {/* I don't think this id is used */}
                            <Card.Text>
                                <strong>Name:</strong> {application.name} <br/>
                                <strong>Email:</strong> {application.email} <br/>
                                <strong>NUA or Mandy's Line:</strong> {application.mandysLine} <br/>
                                <strong>Over 21?</strong> {application.over21} <br/>
                                <strong>Phone Number: </strong>{application.phoneNumber} <br/>
                                <strong>US resident?</strong> {application.resident} <br/>
                                <strong>Night Owl?</strong> {application.nightOwl} <br/>
                                <strong>Availability:</strong> 
                                    <ul>
                                        <li><strong>Monday:</strong> {application.monday}</li>
                                        <li><strong>Tuesday:</strong> {application.tuesday}</li>
                                        <li><strong>Wednesday:</strong> {application.wednesday}</li>
                                        <li><strong>Thursday:</strong> {application.thursday}</li>
                                        <li><strong>Friday:</strong> {application.friday}</li>
                                        <li><strong>Saturday:</strong> {application.saturday}</li>
                                        <li><strong>Sunday:</strong> {application.sunday}</li>
                                    </ul>
                                <strong>SUD:</strong> {application.SUD} <br/>
                                <strong>Facebook:</strong> {application.facebook} <br/>
                                <strong>Understand what First Person language means:</strong> {application.firstPerson} <br/>
                                <strong>Harm Reduction Experience:</strong> {application.harmReductionEXP} <br/>
                                <strong>Harm Reduction Explanation:</strong> {application.harmReductionExplain} <br/>
                                <strong>Treatment Center:</strong> {application.treatmentCenter} <br/>
                                <strong>Mandated Reporter:</strong> {application.mandatedReporter} <br/>
                                <strong>Recovery:</strong> {application.recovery} <br/>
                                <strong>End Goal:</strong> {application.endGoal} <br/>
                                <strong>Special Skills:</strong> {application.specialSkills} <br/>
                                <strong>Why:</strong> {application.why} <br/>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={4}>
                        {/* <Card.Footer> */}
                            <Row xs={1} md={2}>
                                <Button
                                    className='m-md-3 z-3'
                                    onClick={handleDownloadclick}
                                >
                                    Download
                                </Button>
                                {/* <!-- Button trigger modal --> */}
                                <Button 
                                    className='btn-danger ms-md-3 mt-2 mt-md-0 z-3'
                                    data-bs-toggle="modal"
                                    data-bs-target={`#deleteModal${application._id}`}
                                >
                                    Delete
                                </Button>
                            </Row>
                        {/* </Card.Footer>     */}
                    </Col>               
                </Card>
            </Container>
            <div 
                className="modal fade" 
                id={`deleteModal${application._id}`}
                tabIndex="-1" 
                aria-labelledby="exampleModalLabel" 
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                        >
                            Delete the application for {application.name}?
                        </h1>
                        <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this application? It can't be undone.
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button danger"
                            data-bs-dismiss="modal" 
                            onClick={handleDeleteClick}
                            className="btn btn-danger"
                        >
                            I'm sure, delete {application.name}'s application
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-secondary" data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
