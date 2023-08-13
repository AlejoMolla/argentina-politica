import { Fragment, useState } from "react"
// Información
import { SAN_MARTIN } from "../../assets/static/articulos/san_martin"

export default function SanMartin() {
    // El componente controla la información a través del estado
    const [sanMartinData, setSanMartinData] = useState(SAN_MARTIN);

    return <div className="row row-header justify-content-center">
        <div className="content pt-5 px-4 col-12 col-md-10">
            <h2>{sanMartinData.titulo}</h2>
            { // Renderiza el contenido del artículo
                sanMartinData.contenido.map(({subtitulo, texto}, index) => (
                    <Fragment key={index}>
                        <h4 className="mt-5">{subtitulo}</h4>
                        { // Renderiza los párrafos del subtítulo
                            texto.map((texto, index) => (
                                <p key={index} className="lead">{texto}</p>
                            ))
                        }
                    </Fragment>
                ))
            }
        </div>
    </div>
}
