export default function communityGraphicsItem({image, isActive}) {
    
    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt="..."/>
        </div>
    );
}

// <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
// <div className="carousel-inner">
//     <div className="carousel-item active">
//         <img src="../assets/community-assets/communityNUA0.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//         <img src="../assets/community-assets/communityNUA1.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//         <img src="../../../src/assets/community-assets/communityNUA2.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//         <img src="../../../src/assets/community-assets/communityNUA3.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//         <img src="../../../src/assets/community-assets/communityNUA4.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//         <img src="../../../src/assets/community-assets/communityNUA5.png" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//         <img src="../../../src/assets/community-assets/communityNUA6.png" className="d-block w-100" alt="..."/>
//     </div>

// </div>
// <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
// </button>
// </div>