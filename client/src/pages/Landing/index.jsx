import FAQ from '../../components/FAQ';
import About from '../../components/About';
import Stats from '../../components/Stats';
import LandingHeader from '../../components/LandingHeader';
import HarmReduction from '../../components/HarmReduction';
import StaffPics from '../../components/StaffPics';

import {Container, Row, Col } from 'react-bootstrap'

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
        <LandingHeader/>
        <Row > 
          <Col xs={12} md={6} className='aboutBkg'>
            <About  />
          </Col>
          <Col xs={12} md={6} className='statsBkg'>
            <Stats 
              callsRecieved={callsRecieved}
              peopleServed={peopleServed}
              reversals={reversals}
            />
          </Col>
        </Row>
        <StaffPics />

        {/* This is partially just here to make it so the navbar won't cover up any of the FAQ questions */}
        <h2 id='faq' className='text-center' 
            style={{
              paddingTop: '3rem', 
              paddingBottom: '2rem'
            }}
        >
          FAQ
        </h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-sm-8 pb-3'>
              <FAQ />
            </div>
          </div>
        </div>
    </>
  );
}
