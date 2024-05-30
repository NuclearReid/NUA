import Auth from '../../utils/auth';
import { Row, Col, Container} from 'react-bootstrap';

import ChangeStatsForm from '../../components/adminComponents/statsForm'
import GreivanceCardDisplay from '../../components/adminComponents/GreivanceCardDisplay';



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
                <h1 className='text-center'>The Admin Portal!</h1>
                <Col>
                    <Row xs={12} md={4}>
                        <ChangeStatsForm />
                        <GreivanceCardDisplay />
                    </Row>
                
                </Col>

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