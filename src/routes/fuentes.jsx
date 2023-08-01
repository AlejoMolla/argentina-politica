import { Fragment } from "react";
import { FUENTES } from "../assets/static/fuentes";

export default function Fuentes() {
    return <div className="row mt-4">
        <div className="col-12">
            <h2>Fuentes</h2>
            {FUENTES.map(fuente => (
                <Fragment key={fuente.id}>
                    <a href={fuente.link} target="_blank" className="text-decoration-hover btn btn-link">
                        {fuente.text}
                    </a> <br />
                </Fragment>
            ))}
        </div>
    </div>
}