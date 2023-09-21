import { Fragment, useState } from "react"
// Información
import { GUERRA_DE_MALVINAS } from "../../assets/static/articulos/la_guerra_de_malvinas"

export default function GuerraDeMalvinas() {
    // El componente controla la información a través del estado
    const [guerraDeMalvinas, setGuerraDeMalvinas] = useState(GUERRA_DE_MALVINAS);

    return <div className="row row-header justify-content-center">
        <div className="content pt-5 px-4 col-12 col-md-10">
            <h2>{guerraDeMalvinas.titulo}</h2>
            { // Renderiza el contenido del artículo
                guerraDeMalvinas.contenido.map(({subtitulo, texto}, index) => (
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
