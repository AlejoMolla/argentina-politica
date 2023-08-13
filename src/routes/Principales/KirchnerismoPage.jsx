import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { KIRCHNERISMO } from "../../assets/static/kirchnerismo";

export default function Kirchnerismo() {
    // El componente controla la información a través del estado
    const [kirchnerismo, setKirchnerismo] = useState(KIRCHNERISMO);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header">
        <Sidebar sections={[kirchnerismo, index]} onClick={setIndex} />
        <RenderContent data={kirchnerismo.filter(per => per.id === index)} />
    </div>
}
