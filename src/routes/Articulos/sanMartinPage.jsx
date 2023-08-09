import { Fragment, useState } from "react"
import { SAN_MARTIN } from "../../assets/static/articulos/san_martin"

export default function SanMartin() {
    const [sanMartinData, setSanMartinData] = useState(SAN_MARTIN);

    return <div className="row row-header justify-content-center">
        <div className="content pt-5 px-4 col-12 col-md-10">
            <h2>{sanMartinData.titulo}</h2>
            {sanMartinData.contenido.map(({subtitulo, texto}, index) => (
                <Fragment key={index}>
                    <h4 className="mt-5">{subtitulo}</h4>
                    {texto.map((texto, index) => <p key={index} className="lead">{texto}</p>)}
                </Fragment>
            ))}
        </div>
    </div>
}