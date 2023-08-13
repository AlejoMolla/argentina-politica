import { useState } from "react";
import { Link } from "react-router-dom";

import { FOOTER_DATA } from "../assets/static/index/footer";

export default function Footer() {
    const [data, setData] = useState(FOOTER_DATA);

    return <>
    
        <div className="row">
            <div className="container bg-dark p-5 pb-0">
                <div className="row text-light">

                    <div className="col-12 col-md-8">
                        <h4>Fuentes</h4>
                        <div className="ps-4 d-flex flex-column">
                            <Link to="fuentes" className="text-light text-decoration-hover">Ver Fuentes</Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mt-4 mt-md-0">
                        <h4>Nosotros</h4>
                        <div className="ps-4 d-flex-flex-column">
                            <h5>Estudiantes</h5>
                                <div className="ps-4">
                                    {
                                        data.estudiantes.map((student, index) => (
                                            <p key={index}>{student}</p>
                                        ))
                                    }
                                </div>
                            <h5>Profesor</h5>
                                <div className="ps-4">
                                    <p>{data.profesor}</p>
                                </div>
                            <h5>Escuela</h5>
                                <div className="ps-4">
                                    <p>{data.escuela}</p>
                                </div>
                            <h5>Curso</h5>
                                <div className="ps-4">
                                    <p>{data.curso}</p>
                                </div>
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center p-4">
                        Grupo EESTN°2 6to Info &copy; 2023
                    </div>
                </div>
            </div>
        </div>

    </>
}
