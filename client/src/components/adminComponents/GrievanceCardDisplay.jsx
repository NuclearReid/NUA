import { Container, Carousel} from 'react-bootstrap';
import { useState, useEffect } from 'react';

import GrievanceCardData from './GrievanceCardData';

import {useQuery} from '@apollo/client';
import { QUERY_COMPLAINT } from '../../utils/queries';
import { Next } from 'react-bootstrap/esm/PageItem';

export default function GrievanceCardDisplay() {
    const {loading, data, error, refetch} = useQuery(QUERY_COMPLAINT);

    // Used to subtract 1 from the grievance card index.
    // basically this controlls which spot in the carousel the user is on and if they delete a card, they won't be left looking at a blank card
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    
    return (
        <>
            <Container xs={12} md={4} className='carousel-container'

            >
                {/* interval={null} makes it so the carousel doesn't automatically cyle */}
                <Carousel 
                    activeIndex={activeIndex} 
                    onSelect={handleSelect} 
                    interval={null}
                >
                    {data?.complaints.map((complaint, index) => (
                        // key={complaint._id} is used here to make sure each Carousel Item is unique/can be uniquely identified by react
                        <Carousel.Item key={complaint._id}>
                            <GrievanceCardData 
                                index={index} 
                                complaint={complaint} 
                                refetch={refetch}
                                setActiveIndex={setActiveIndex}
                                activeIndex={activeIndex}
                                numberOfGrievances={data.complaints.length}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}