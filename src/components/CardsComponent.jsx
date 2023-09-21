import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

// Devuelve un Link si el enlace es de intero, y un <a> si es externo
function CardLink({link, texto, color, isPageLink}) {
    if(isPageLink) {
        return <>
            <Link
                to={link}
                className={`btn btn-${color} me-1 mb-1`}
            >
                {texto}
            </Link>
        </>
    } else {
        return <>
            <a
                target="_blank"
                href={link}
                className={`btn btn-${color} me-1 mb-1`}
            >
                {texto}
            </a>
        </>
    }
}

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
                            body.boton.children.map(({color, link, texto, isPageLink}, index) => (
                                <CardLink color={color} link={link} texto={texto} isPageLink={isPageLink} key={index} />
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
                    body.boton.children.map(({color, link, texto, isPageLink}, index) => (
                        <CardLink color={color} link={link} texto={texto} isPageLink={isPageLink} key={index} />
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
            boton: {isButton, children: {color, link, texto, isPageLink}}
        }
    }
*/

export default function CardsComponent({image, body}) {
    return <>
        <CardVertical image={image} body={body} />
        <CardHorizontal image={image} body={body} />
    </>
}
