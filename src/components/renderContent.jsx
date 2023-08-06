import { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

function CardsComponent({image, body}) {
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
                        {body.boton.isButton &&
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
                {body.boton.isButton &&
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

export default function RenderContent({ fileJson }) {
    const data = fileJson[0];
    const contentRef = useRef(null);
    const asideRef = useRef(null);

    // Devolver el scroll a 0
    useEffect(function() {
        contentRef.current.scrollTo(0,0)
        asideRef.current.scrollTo(0,0)
    }, [data]);

    console.log(data)
    return <>
        <div className="content pt-5 px-4 col-12 col-md-6 scrollable" ref={contentRef}>
            <h2>{data.titulo}</h2>
            {
                data.contenido.map(({subtitulo, texto}, index) => (
                    <Fragment key={index}>
                        <h4 className="mt-5">{subtitulo}</h4>
                        {
                            texto.map((articulo, index) => (
                                <p className="lead" key={index}>
                                    {articulo}
                                </p>
                            ))
                        }
                    </Fragment>
                ))
            }
            {data.boton.isButton &&
                data.boton.children.map(({color, link, texto}, index) => (
                    <Link className={`btn btn-${color}`} to={link} key={index}>
                        {texto}
                    </Link>
                ))
                
            }
        </div>
        <div className="aside col-12 col-sm-12 col-md-3 scrollable" ref={asideRef}>
            <CardsComponent
                image={{
                    src: data.aside.imagen.src,
                    alt: data.aside.imagen.alt
                }}
                body={{
                    titulo: data.aside.titulo,
                    contenido: data.aside.contenido,
                    boton: {
                        isButton: data.aside.boton.isButton,
                        children: data.aside.boton.children
                    }
                }}
            />
        </div>
    </>
}