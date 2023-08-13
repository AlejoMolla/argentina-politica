import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { PERONISMO } from "../../assets/static/peronismo";

export default function Peronismo() {
    // El componente controla la información a través del estado
    const [peronismo, setPeronismo] = useState(PERONISMO);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header justify-content-center">
        <Sidebar sections={[peronismo, index]} onClick={setIndex} />
        <RenderContent data={peronismo.filter(articulo => articulo.id === index)} />
    </div>
}
