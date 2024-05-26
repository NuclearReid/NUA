export default function LandingHeader () {
    const phoneNumber = '0493071163';

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`
    };
    return (
        <div className="landing landingBackgroundImg">
            <div className="row">
                <div className="col-12 text-center"> 
                    <div className='text-container rounded'>
                        <h1 className="fs-3">Never use alone!</h1>
                        <div className="d-flex justify-content-center col top-fixed">
                            <h2 className="fs-1">
                                NO SHAMING, NO JUDGMENT.
                                <br />
                                NO PREACHING, JUST LOVE!
                            </h2>
                        </div>
                        <div>
                            <p className="fs-3"> 
                                Planning to use but don't have anyone to make sure your safe? Please call us! We will stay on the line with you and immediately send help if you become unresponsive
                            </p>
                            <button className="btn btn-primary callUs fs-1 fw-bold" onClick={handleClick}>
                                Call us!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}