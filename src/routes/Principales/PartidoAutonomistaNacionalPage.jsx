import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { PARTIDO_AUTONOMISTA_NACIONAL } from "../../assets/static/partido_autonomista_nacional";

export default function PartidoAutonomistaNacional() {
    // El componente controla la información a través del estado
    const [partidoAutonomistaNacional, setPartidoAutonomistaNacional] = useState(PARTIDO_AUTONOMISTA_NACIONAL);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header justify-content-center">
        <Sidebar sections={[partidoAutonomistaNacional, index]} onClick={setIndex} />
        <RenderContent data={partidoAutonomistaNacional.filter(articulo => articulo.id === index)} />
    </div>
}
