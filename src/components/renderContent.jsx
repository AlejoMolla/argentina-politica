import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

export default function RenderContent({ fileJson }) {
    console.log(fileJson)
    const data = fileJson[0];
    return <>
        <div className="content pt-5 px-4">
            <h2>{data.titulo}</h2>
            {data.contenido.map(({subtitulo, subcontenido}) => (
                <>
                    <h4 className="mt-5">{subtitulo}</h4>
                    {subcontenido.split('\n').map(paragraph => (
                        <p className="lead">
                            {paragraph}
                        </p>
                    ))}
                </>
            ))}
        </div>
        <div className="aside">
            <Card>
                <img src={"images/" + data.imagen_aside} alt={data.imagen_aside.replace('.jpg', '')} />
                <CardBody>
                    <CardTitle>
                        <b>{data.titulo_aside}</b>
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