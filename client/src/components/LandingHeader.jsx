export default function LandingHeader () {
    const phoneNumber = '0493071163';

    const handleClick = () => {
        window.location.href = `tel:${phoneNumber}`
    };
    return (
        <div className="landing landingBackgroundImg">
          <div className="row">
              <div className="col-lg-4 col-sm-12"> 
                  <div className='text-container rounded'>
                      <h1>Never use alone!</h1>
                      <div className="d-flex col top-fixed">
                          <h2>
                              NO SHAMING, NO JUDGMENT.
                              <br />
                              NO PREACHING, JUST LOVE!
                          </h2>
                      </div>
                     
                      <button className="btn btn-primary callUs fs-1 fw-bold" onClick={handleClick}>
                        Call us!
                      </button>
                      <p>A bit of info about the organization Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora accusamus sit quibusdam, aperiam dolor expedita vel accusantium magni officia esse repudiandae ipsa inventore ex repellat labore nostrum consequatur nam?</p>
                  </div>
              </div>
          </div>
      </div>
    )
}