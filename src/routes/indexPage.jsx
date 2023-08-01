import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import { ARTICULOS } from "../assets/static/index/articulos";
import { FRASES } from "../assets/static/index/frases";

export function RenderCard({src, alt, link}) {
    return <Link to={link} className="h-100">
        <div className="card mb-2 rounded-3 h-100">
            <img src={src} alt={alt} className="card-img h-100 object-fit-cover object-position-right" />
        </div>
    </Link>
}

export default function Index() {
    let rand = Math.round(Math.random()*(FRASES.length-1));
    let frase = FRASES.data.filter(({id}) => id === rand)[0];
    console.log(frase)

    return <>
        <div className="row row-header">
            <div className="col-12 col-md-7 p-0 h-100-md-75">
                <Carousel />
            </div>
            <div className="col-12 col-md-5 py-5 p-md-0 ps-md-2 h-100-md-75" id="prueba">
                <h2 className="pb-3 fw-bolder display-6 d-md-none">Artículos</h2>
                <div className="d-flex flex-column h-100">
                    {ARTICULOS.map(({src, alt, id, link}) => (
                        <RenderCard src={src} alt={alt} key={id} link={link} />
                    ))}
                </div>
            </div>
            <div className="col-12 h-md-25 frase-bg text-light">
                <div className="row h-100 py-4">
                    <div className="col h-100 ps-3 ps-sm-5 pe-sm-2">
                        <div className="h-100 d-flex justify-content-start align-items-center">
                            <div id="svg-prueba">
                                <span></span>
                                <span></span>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center ps-sm-5">
                                <i className="text-center">"{frase.frase}"</i>
                                <cite className="mt-2">{frase.autor}</cite>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 h-100 border-left d-451-none">
                        <div className="d-flex h-100 justify-content-start align-items-center">
                            <img className="img-fluid logo-frase" src="images/Logos/logo.png" alt="Logo de la Página" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                    <p>Alejo Molla</p>
                                    <p>Ramiro Vega</p>
                                    <p>Lautaro Martinez</p>
                                    <p>Tomas Lucena</p>
                                </div>
                            <h5>Profesor</h5>
                                <div className="ps-4">
                                    <p>Pablo Ruíz</p>
                                </div>
                            <h5>Escuela</h5>
                                <div className="ps-4">
                                    <p>EEST N°2 Gral Ing Manuel N Savio</p>
                                </div>
                            <h5>Curso</h5>
                                <div className="ps-4">
                                    <p>6to 2da Informática</p>
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