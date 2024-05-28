import Auth from '../../utils/auth';
// import React from 'react';
// import { useState } from 'react';
// import { QUERY_ME } from '../../utils/queries';
// import { SET_STATS } from '../../utils/mutations';
// import { useMutation, useQuery } from '@apollo/client';
import ChangeStatsForm from '../../components/adminComponents/statsForm'



export default function adminPortal() {

    // const { loading, data: meData} = useQuery(QUERY_ME);
    // const userEmail = meData?.me?.email;
    
    // handles the logout
    const isLoggedIn = Auth.loggedIn();
    const logoutOnClick = () => {
        Auth.logout();
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                <h1>The Admin Portal!</h1>
                <ChangeStatsForm />

                {/* This is the logout button */}
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