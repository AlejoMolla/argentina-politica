import { Fragment, useState } from "react"
// Información
import { ILUSTRES } from "../../assets/static/articulos/ilustres"

export default function Ilustres() {
    // El componente controla la información a través del estado
    const [ilustres, setIlustres] = useState(ILUSTRES);

    return <div className="row row-header justify-content-center">
        <div className="content pt-5 px-4 col-12 col-md-10">
            <h2>{ilustres.titulo}</h2>
            { // Renderiza el contenido del artículo
                ilustres.contenido.map(({subtitulo, texto}, index) => (
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
