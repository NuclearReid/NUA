import NUAlogo from '../../src/assets/logo.png'
export default function Footer() {
    return(
        <>
            <div className="d-flex justify-content-between p-3 bg-dark text-white">
                <div>
                    <h4>Connect with us</h4>
                    {/* have the facebook logo */}
                    <ul>
                        <li>
                            Participant's Rights
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
