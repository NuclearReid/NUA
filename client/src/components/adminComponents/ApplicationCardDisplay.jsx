import { Container, Carousel} from 'react-bootstrap';
import { useState } from 'react';

import ApplicationCardData from './ApplicationCardData';
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from '../../utils/queries';


export default function ApplicationCardDisplay() {

    const {loading, data, error, refetch} = useQuery(QUERY_APPLICATIONS);
    // console.log(data);

    const [activeIndex, setActiveIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    }


    return (
        <>
            <Container xs={12} md={4} className='carousel-container'>
                <Carousel
                    activeIndex={activeIndex}
                    onSelect={handleSelect}
                    interval={null}
                >
                    {data?.applications.map((application, index) => (
                        <Carousel.Item key={application._id}>
                            <ApplicationCardData
                                index={index}
                                application={application}
                                refetch={refetch}
                                setActiveIndex={setActiveIndex}
                                activeIndex={activeIndex}
                            />
                        </Carousel.Item>
                    ))}
                    </Carousel>
                </Container>
        </>
    )
}