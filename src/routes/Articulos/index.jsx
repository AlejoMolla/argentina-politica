import { useState } from "react";
import { Outlet } from "react-router-dom"
import { ARTICULOS } from "../../assets/static/index/articulos"
import { RenderCard } from "../indexPage";

export function IndexArticulos() {
    const [articulos, setArticulos] = useState(ARTICULOS);
    return <div className="row row-header justify-content-center">
       <div className="col-12 col-md-8 mt-5">
            <h2>Artículos Disponibles</h2>
            {articulos.map(({src, alt, id, link}) => (
                    <RenderCard src={src} alt={alt} key={id} link={link} def={false} />
                ))}
        </div> 
    </div>
}


export default function Articulos() {
    return <>
        <Outlet />
    </>
}