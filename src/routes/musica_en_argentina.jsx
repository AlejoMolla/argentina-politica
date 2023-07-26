import { Fragment, useState } from "react"
import { MUSICA_EN_ARGENTINA } from "../assets/static/articulos/musica_en_argentina"

export default function MusicaEnArgentina() {
    const [musicaData, setMusicaData] = useState(MUSICA_EN_ARGENTINA);

    return <div className="row row-header justify-content-center">
        <div className="content pt-5 px-4 col-12 col-md-10">
            <h2>{musicaData.titulo}</h2>
            {musicaData.contenido.map(({subtitulo, texto}, index) => (
                <Fragment key={index}>
                    <h4 className="mt-5">{subtitulo}</h4>
                    {texto.map((texto, index) => <p key={index} className="lead">{texto}</p>)}
                </Fragment>
            ))}
        </div>
    </div>
}