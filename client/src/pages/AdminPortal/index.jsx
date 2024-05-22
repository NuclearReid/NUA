import Auth from '../../utils/auth';
import React from 'react';
import { QUERY_ME } from '../../utils/queries';

import { useMutation, useQuery } from '@apollo/client';

export default function TestPage() {

    const { loading, data} = useQuery(QUERY_ME);
    const userEmail = data?.me?.email;

    // handles the logout
    const isLoggedIn = Auth.loggedIn();
    const logoutOnClick = () => {
        Auth.logout();
    }

    // handles the status update
    const statsOnClick = () => {
        event.preventDefault();
        console.log('clicked the stat button')


        
    }




    return (
        <>
            {isLoggedIn ? (
                <>
                <h1>Hey there! {userEmail}</h1>

                <form className='col-7 p-3'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-callsReceived">Calls Received</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-peopleServed">People Served</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-reversals">Reversals</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div> 
                    {/* create a statsOnClick for this button */}
                    <button type='submit' className='primary' onClick={statsOnClick}>
                        Update Stats
                    </button>
                </form>
                <button className='primary m-3' onClick={logoutOnClick}>
                        Logout!
                    </button>
            </>
            ):( 
                window.location.assign('/')
            )}
        </>
    )
}