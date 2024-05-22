import FAQ from '../../components/FAQ';
import About from '../../components/About';
import Stats from '../../components/Stats';
import LandingHeader from '../../components/LandingHeader';

import {useState } from 'react';
import {useQuery} from '@apollo/client';
import { QUERY_ADMIN } from '../../utils/queries';


export default function Landing() {
  const {loading, data} = useQuery(QUERY_ADMIN);
  const adminData = data;
  const callsRecieved = data?.admin?.callsRecieved;
  const peopleServed = data?.admin?.peopleServed;
  const reversals = data?.admin?.reversals;
    
  return (
    <>
        <LandingHeader />
        <About />
        <Stats 
          callsRecieved={callsRecieved}
          peopleServed={peopleServed}
          reversals={reversals}/>
        <div className='p-5 col-7'>
            <FAQ />
        </div>      
    </>
  );
}
