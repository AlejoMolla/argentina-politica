import { useState, useEffect } from "react";

// Componentes
import Carousel from "../components/CarouselComponent";
import RenderCard from "../components/RenderCardComponent";
import Footer from "../components/FooterComponent";

// Información
import { ARTICULOS } from "../assets/static/index/articulos";
import { FRASES } from "../assets/static/index/frases";

function RenderFrase({ frase }) {
    return <>
    
        <div className="col-12 h-md-25 frase-bg text-light">
            <div className="row h-100 py-4">
                <div className="col h-100 ps-3 ps-sm-5 pe-sm-2">
                    <div className="h-100 d-flex justify-content-start align-items-center">
                        <div id="frase-svg">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center px-sm-3">
                            <i className="text-center">"{frase.frase}"</i>
                            <cite className="mt-2">{frase.autor}</cite>
                        </div>
                    </div>
                </div>
                <div className="col-3 h-100 border-left d-logo-none">
                    <div className="d-flex h-100 justify-content-start align-items-center">
                        <img className="logo-frase" src="images/Logos/logo.png" alt="Logo de la Página" />
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default function Index() {
    // Frase que se va a mostrar en '/'
    const [frase, setFrase] = useState("");
    
    // Selecciona una frase random cada vez que se renderiza
    useEffect(function() {
        let rand = Math.round(Math.random()*(FRASES.length-1));
        let temp = FRASES.data.filter(({id}) => id === rand)[0];
        
        setFrase(temp);
    }, []);

    return <>
        {/* Contenido */}
        <div className="row row-header">

            {/* Carousel */}
            <div className="col-12 col-md-7 p-0 h-100-md-75">
                <Carousel />
            </div>

            {/* Artículos Extras */}
            <div className="col-12 col-md-5 py-5 p-md-0 ps-md-2 h-100-md-75 overflow-y-auto">
                <h2 className="pb-3 fw-bolder display-6 d-md-none">Artículos</h2>
                <div className="d-flex flex-column h-100">
                    {ARTICULOS.map(({src, alt, id, link}) => (
                        <RenderCard src={src} alt={alt} key={id} link={link} />
                    ))}
                </div>
            </div>

            {/* Frases */}
            <RenderFrase frase={frase} />
        </div>

        {/* Footer */}
        <Footer />
    </>
}
