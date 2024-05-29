import Auth from '../../utils/auth';

import ChangeStatsForm from '../../components/adminComponents/statsForm'



export default function adminPortal() {
    
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