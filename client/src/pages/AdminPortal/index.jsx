import Auth from '../../utils/auth';
import React from 'react';
import { useState } from 'react';
import { QUERY_ME } from '../../utils/queries';
import { SET_STATS } from '../../utils/mutations';

import { useMutation, useQuery } from '@apollo/client';

export default function changeStats() {

    const { loading, data: meData} = useQuery(QUERY_ME);
    const userEmail = meData?.me?.email;

    const [setStats, {error, data:setStatsData}] = useMutation(SET_STATS);
    
    // handles the logout
    const isLoggedIn = Auth.loggedIn();
    const logoutOnClick = () => {
        Auth.logout();
    }

    // handles the status update
    const [formState, setFormState] = useState({
        callsRecieved: '',
        peopleServed: '',
        reversals: '',

    })
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    const statsSubmit = async (event) => {
        event.preventDefault();
        console.log('clicked the stat button')
        try {
            // This is here to check if something is put in the stat input and if there isn't anything, it won't update that stat as null
            const variables = Object.fromEntries(
                Object.entries(formState).filter(([key, value]) => value ).map(([key, value]) => [key, parseInt(value)])
            );
            await setStats({variables});
            setFormState({
                callsRecieved: '',
                peopleServed: '',
                reversals: '',
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                <h1>Hey there! {userEmail}</h1>

                <form 
                    className='col-7 p-3'
                    onChange={handleChange}>
                    <div className="input-group mb-3">
                        <span 
                            className="input-group-text" 
                            id="inputGroup-sizing-callsRecieved">
                                Calls Recieved
                        </span>
                        <input 
                            name='callsRecieved' 
                            type="number" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span 
                            className="input-group-text" 
                            id="inputGroup-sizing-peopleServed">
                                People Served
                        </span>
                        <input 
                            name='peopleServed' 
                            type="number" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span 
                            className="input-group-text" 
                            id="inputGroup-sizing-reversals">
                                Reversals
                        </span>
                        <input 
                            name='reversals' 
                            type="number" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                        />
                    </div> 

                    {/* create a statsOnClick for this button */}
                    <button 
                        type='submit' 
                        className='primary' 
                        onClick={statsSubmit}>
                            Update Stats
                    </button>
                </form>
                <button 
                    className='primary m-3' 
                    onClick={logoutOnClick}>
                        Logout!
                </button>
            </>
            ):( 
                window.location.assign('/')
            )}
        </>
    )
}