import { Fragment } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

export default function RenderContent({ fileJson }) {
    const data = fileJson[0];
    console.log(data)
    return <>
        <div className="content pt-5 px-4 col-12 col-md-6 scrollable">
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
            {/* {data.contenido.map(({subtitulo, subcontenido}, index) => (
                <Fragment key={index}>
                    <h4 className="mt-5">{subtitulo}</h4>
                    {subcontenido.split('\n').map((paragraph, index) => (
                        <p className="lead" key={index}>
                            {paragraph}
                        </p>
                    ))}
                </Fragment>
            ))} */}
        </div>
        <div className="aside col-8 col-sm-6 col-md-3 scrollable">
            <Card>
                <div className="border p-2">
                    <img
                        className="rounded-2"
                        src={data.aside.imagen.src}
                        alt={data.aside.imagen.alt}
                    />
                </div>
                <CardBody>
                    <CardTitle>
                        <b>{data.aside.titulo}</b>
                    </CardTitle>
                    <CardText>
                        {data.aside.contenido}
                    </CardText>
                    {data.aside.boton.isButton &&
                        data.aside.boton.children.map(({color, link, texto}, index) => (
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
                    {/* {data.aside.boton.map((boton, index) => (
                        <a
                            key={index}
                            target="_blank"
                            href={boton.link}
                            className={`btn ${boton.color} me-1 mb-1`}
                        >
                            <b>{boton.contenido}</b>
                        </a>
                    ))} */}
                </CardBody>
            </Card>
        </div>
    </>
}