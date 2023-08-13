import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

// Card que se renderiza en pantallas small (Bootstrap 5)
function CardVertical({image, body}) {
    return <>
    
        <div className="card d-none d-sm-block d-md-none">
            <div className="row g-0">
                <div className="col-4">
                    <img src={image.src} alt={image.alt} className="img-fluid rounded-start" />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{body.titulo}</h5>
                        <p className="card-text">
                            {body.contenido}
                        </p>
                        {body.boton.isButton && // Renderiza el botón (si hay) al final del aside
                            body.boton.children.map(({color, link, texto}, index) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    href={link}
                                    className={`btn btn-${color} me-1 mb-1`}
                                >
                                    {texto}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    
    </>
}

// Card que se renderiza en el resto de las pantallas
function CardHorizontal({ image, body }) {
    return <>
    
        <Card className="d-sm-none d-md-block">
            <div className="border p-2">
                <img
                    className="rounded-2"
                    src={image.src}
                    alt={image.alt}
                />
            </div>
            <CardBody>
                <CardTitle>
                    <b>{body.titulo}</b>
                </CardTitle>
                <CardText>
                    {body.contenido}
                </CardText>
                {body.boton.isButton && // Renderiza el botón (si hay) al final del aside
                    body.boton.children.map(({color, link, texto}, index) => (
                        <a
                            key={index}
                            target="_blank"
                            href={link}
                            className={`btn btn-${color} me-1 mb-1`}
                        >
                            {texto}
                        </a>
                    ))
                }
            </CardBody>
        </Card>

    </>
}

/*
    props = {
        image: {
            src,
            alt
        },
        body: {
            titulo,
            contenido,
            boton: {isButton, children}
        }
    }
*/

export default function CardsComponent({image, body}) {
    return <>
        <CardVertical image={image} body={body} />
        <CardHorizontal image={image} body={body} />
    </>
}
