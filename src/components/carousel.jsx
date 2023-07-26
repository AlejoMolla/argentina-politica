import { ITEMS } from "../assets/static/index/carouselData"

function CarouselItem({url, alt, id}) {
    let isActive = id == 0 ? 'active' : ''
    return <div className={"carousel-item h-100 " + isActive}>
        <img src={url} alt={alt} className="d-block w-100 h-100 object-fit-cover" />
    </div>
}

export default function Carousel() {
    return <div className="carousel slide h-100" id="carouselIndex">
        <div className="carousel-inner h-100">
            {ITEMS.map(item => (
                <CarouselItem key={item.id} alt={item.alt} url={item.url} id={item.id} />
            ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndex" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndex" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}