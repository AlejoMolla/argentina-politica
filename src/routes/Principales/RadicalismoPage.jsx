import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { RADICALISMO } from "../../assets/static/radicalismo";

export default function Radicalismo() {
    // El componente controla la información a través del estado
    const [radicalismo, setRadicalismo] = useState(RADICALISMO);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header justify-content-center">
        <Sidebar sections={[radicalismo, index]} onClick={setIndex} />
        <RenderContent data={radicalismo.filter(articulo => articulo.id === index)} />
    </div>
}
