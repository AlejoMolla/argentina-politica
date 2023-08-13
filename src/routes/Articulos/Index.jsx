import { useState } from "react";
import { Outlet } from "react-router-dom"
// Componentes
import RenderCard from "../../components/RenderCardComponent";
// Información
import { ARTICULOS } from "../../assets/static/index/articulos"

// Renderiza la Página Index de la ruta '/articulos/'
export function IndexArticulos() {
    // El componente controla la información a través del estado
    const [articulos, setArticulos] = useState(ARTICULOS);

    return <div className="row row-header justify-content-center">
       <div className="col-12 col-md-8 mt-5">
            <h2>Artículos Disponibles</h2>
            { // Renderiza las cards con los artículos disponibles
                articulos.map(({src, alt, id, link}) => (
                    <RenderCard src={src} alt={alt} key={id} link={link} def={false} />
                ))
            }
        </div> 
    </div>
}

// Componente que renderiza '/articulos'
export default function Articulos() {
    return <>
        <Outlet />
    </>
}
