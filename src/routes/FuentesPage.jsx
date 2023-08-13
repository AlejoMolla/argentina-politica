import { Fragment, useState } from "react";
// Información
import { FUENTES } from "../assets/static/fuentes";

export default function Fuentes() {
    // Guarda la información en el estado del componente (Para que el componente pase a controlar la información)
    const [fuentes, setFuentes] = useState(FUENTES);

    return <div className="row mt-4">
        <div className="col-12">
            <h2>Fuentes</h2>
            { // Renderiza las fuentes
                fuentes.map(fuente => (
                    <Fragment key={fuente.id}>
                        <a href={fuente.link} target="_blank" className="text-decoration-hover btn btn-link">
                            {fuente.text}
                        </a> <br />
                    </Fragment>
                ))
            }
        </div>
    </div>
}
