import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { MENEMISMO } from "../../assets/static/menemismo";

export default function Menemismo() {
    // El componente controla la información a través del estado
    const [menemismo, setMenemismo] = useState(MENEMISMO);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header">
        <Sidebar sections={[menemismo, index]} onClick={setIndex} />
        <RenderContent data={menemismo.filter(per => per.id === index)} />
    </div>
}
