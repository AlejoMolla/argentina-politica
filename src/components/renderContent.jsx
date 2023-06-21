import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

export default function RenderContent({ fileJson }) {
    console.log(fileJson)
    const data = fileJson[0];
    return <>
        <div className="content pt-5 px-4">
            <h2>{data.titulo}</h2>
            {data.contenido.map(({subtitulo, subcontenido}) => (
                <>
                    <h4>{subtitulo}</h4>
                    <p className="lead">
                        {subcontenido}
                    </p>
                </>
            ))}
        </div>
        <div className="aside">
            <Card>
                <img src={"images/" + data.imagen_aside} alt="Evita Perón" />
                <CardBody>
                    <CardTitle>
                        {data.titulo_aside}
                    </CardTitle>
                    <CardText>
                        {data.contenido_aside}
                    </CardText>
                    {data.boton_aside.map(boton => (
                        <a
                            target="_blank"
                            href={boton.link}
                            className={`btn ${boton.color} me-1 mb-1`}
                        >
                            <b>{boton.contenido}</b>
                        </a>
                    ))}
                </CardBody>
            </Card>
        </div>
    </>
}