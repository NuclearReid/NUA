import {Card, Container, Button, Row} from 'react-bootstrap'
import dayjs from 'dayjs';
import {useState} from 'react'

import { useMutation } from '@apollo/client';
import { DELETE_COMPLAINT } from '../../utils/mutations';


export default function GrievanceCardData ({complaint, index, refetch, setActiveIndex, activeIndex}) {
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

    return (
        <>
            <Container>
                <Card className='p-4'
                    value={complaint._id}
                >
                    <h2>Grievance Card {index +1 }</h2>
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
                    <Row xs={12} md={2}>
                        <Button 
                            className='btn-primary'
                            onClick={handleDownloadClick}
                        >
                            Download
                        </Button>

                        <Button 
                            className='btn-danger'
                            onClick={handleDeleteClick}
                        >
                            Delete Grievance
                        </Button>
                    </Row>
                </Card>
            </Container>
        </>
    )
}