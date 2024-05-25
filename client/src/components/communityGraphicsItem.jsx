export default function communityGraphicsItem({image, isActive}) {
    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img src={image} className="d-block w-100 carousel-image" alt="..."/>
        </div>
    );
}