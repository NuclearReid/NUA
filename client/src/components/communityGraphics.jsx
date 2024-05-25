import CommunityGraphicsItem from "./communityGraphicsItem"

export default function communityGraphics() {
    const communityImages = [
        {
            image: '../../src/assets/community-assets/communityNUA0.png'
        },
        {
            image: '../../src/assets/community-assets/communityNUA1.png'
        },
        {
            image: '../../src/assets/community-assets/communityNUA2.png'
        },
        {
            image: '../../src/assets/community-assets/communityNUA3.png'
        },
        {
            image: '../../src/assets/community-assets/communityNUA4.png'
        },
        {
            image: '../../src/assets/community-assets/communityNUA5.png'
        },
        {
            image: '../../src/assets/community-assets/communityNUA6.png'
        },
    ]

    return(
        
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {communityImages.map((communityImgaes, index) => (
                    <CommunityGraphicsItem key={index} id={index} isActive={index === 0} image={communityImgaes.image} />
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}