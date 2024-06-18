import NUAlogo from '../../src/assets/logo.png'
import {Link} from 'react-router-dom'
export default function Footer() {
    return(
        <>
            <div className="d-flex justify-content-between p-3 bg-dark text-white">
                <div>
                    <h4>Connect with us</h4>
                    {/* have the facebook logo */}
                    <ul>
                        <li>
                            Connect with us on Facebook!
                        </li>
                        <li>
                            <Link className='nav-link active' to="/participantRights">
                                Participant's Rights
                            </Link>
                            
                        </li>
                        <li>
                            12 Step alternatives
                        </li>
                    </ul>
                </div>
                <div>
                    <picture>
                        <img src={NUAlogo} alt='Never Use Alone Logo' height={100}/>
                    </picture>
                </div>
            </div>
        </>
    )
}
