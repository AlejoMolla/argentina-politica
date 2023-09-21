import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { DICTADURA } from "../../assets/static/dictadura";

export default function Dictadura() {
    // El componente controla la información a través del estado
    const [dictadura, setDictadura] = useState(DICTADURA);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header">
        <Sidebar sections={[dictadura, index]} onClick={setIndex} />
        <RenderContent data={dictadura.filter(per => per.id === index)} />
    </div>
}
