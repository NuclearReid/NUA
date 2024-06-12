import {Card, Container, Button, Row, Col} from 'react-bootstrap'
import dayjs from 'dayjs';
import {useState} from 'react'

import { useMutation } from '@apollo/client';
import { DELETE_COMPLAINT } from '../../utils/mutations';


export default function GrievanceCardData ({complaint, index, refetch, setActiveIndex, activeIndex, numberOfGrievances}) {
    // console.log(complaint);
    const date = dayjs(complaint.date).format('MM/DD/YYYY')

    const [deleteComplaint, {error}] = useMutation(DELETE_COMPLAINT);

    const handleDeleteClick = async (event) => {
        try {
            const mutationResponse = await deleteComplaint({
                variables: {
                    _id: complaint._id,
                }
            });
            // This is here to subtract 1 from the index for the carousel. Makes it so when you delete it's the last card in the carousel, the carousel doesn't end up blank
            if(index === activeIndex && activeIndex > 0) {
                setActiveIndex(prev => prev -1 );
            }
            await refetch();
        } catch (error) {
            console.error(error)
            console.error('Apollo error: ', error.graphQLErrors)
        }
    }
    
    const handleDownloadClick = () => {
        // I needed to make this variable because for some reason, I couldn't get the variables were coming up blank from the <p> 
        const grievanceContent = `
            Name: ${complaint.firstName} ${complaint.lastName}
            Email: ${complaint.email}
            Phone Number: ${complaint.phoneNumber}
            Nature of Grievance: ${complaint.grievance}
            Description: ${complaint.description}
            Impact: ${complaint.impact}
            Who was involved: ${complaint.namesOfInvolved}
            Suggestions: ${complaint.suggestions}
            confidentiality: ${complaint.confidentiality}
            Time: ${complaint.time}
            Date: ${date}
        `;
        const element = document.createElement('a');
        const file = new Blob([grievanceContent], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = `Grievance-${complaint.firstName}-${complaint.lastName}.txt`;
        // document.body.appendChild is needed for this to work in firefox
        document.body.appendChild(element);
        element.click();
    }
    // const PrevArrowIcon = <span aria-hidden="true" className="carousel-control-prev-icon" />;
    // const NextArrowIcon = <span aria-hidden="true" className="carousel-control-next-icon" />;

    return (
        <>
            <Container>         
                <Card  className='p-5 m-0 m-md-5'
                    value={complaint._id}
                >
                    <h2>Grievance Card {index +1 } of {numberOfGrievances}</h2>
                    <p id='grievance-content'>
                        Name: {complaint.firstName} {complaint.lastName} <br/>
                        Email: {complaint.email} <br/>
                        Phone Number: {complaint.phoneNumber} <br/>
                        Nature of Grievance: {complaint.grievance} <br/>
                        Description: {complaint.description} <br/>
                        Impact: {complaint.impact} <br/>
                        Who was involved: {complaint.namesOfInvolved} <br/>
                        Suggestions: {complaint.suggestions} <br/>
                        confidentiality: {complaint.confidentiality} <br/>
                        Time: {complaint.time} <br/>
                        Date: {date}
                    </p>
                    <Col xs={12} md={4}>
                        <Row xs={1} md={2}>
                            {/* the download or delete buttons */}
                            <Button 
                                className='btn-primary m-3'
                                onClick={handleDownloadClick}
                            >
                                Download
                            </Button>
                            <Button 
                                className='btn-danger ms-md-3 mt-2 mt-md-0'
                                data-bs-toggle="modal"
                                data-bs-target={`#deleteModal${complaint._id}`}
                            >
                                Delete Grievance
                            </Button>
                        </Row>
                    </Col>
                </Card>
            </Container>

            <div 
                className="modal fade" 
                id={`deleteModal${complaint._id}`}
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
                            Delete the Grievance for {complaint.firstName} {complaint.lastName}?
                        </h1>
                        <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this grievance? It can't be undone.
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button danger"
                            data-bs-dismiss="modal" 
                            onClick={handleDeleteClick}
                            className="btn btn-danger"
                        >
                            I'm sure, delete {complaint.firstName}'s grievance
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