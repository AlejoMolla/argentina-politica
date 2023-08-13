// Items del Carousel
import { ITEMS } from "../assets/static/index/carouselData"

// Componente de Carousel Item
function CarouselItem({url, alt, id}) {
    // Verifica si el item es el primero (0) y le da una className 'active'
    let isActive = id == 0 ? 'active' : ''

    return <div className={"carousel-item h-100 " + isActive}>
        <img src={url} alt={alt} className="d-block w-100 h-100 object-fit-cover" />
    </div>
}

// Botones Prev y Next del Carousel
function CarouselButtons({ id }) {
    return <>

        <button className="carousel-control-prev" type="button" data-bs-target={id} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target={id} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

    </>
}

export default function Carousel() {
    return <div className="carousel slide h-100" id="carouselIndex">
        <div className="carousel-inner h-100">
            { // Genera los Items del Carousel
                ITEMS.map(item => (
                    <CarouselItem key={item.id} alt={item.alt} url={item.url} id={item.id} />
                ))
            }
        </div>

        <CarouselButtons id="#carouselIndex" />
    </div>
}