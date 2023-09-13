import { useState } from "react";
// Componentes
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";
// Información
import { DECADA_INFAME } from "../../assets/static/decada_infame";

export default function DecadaInfame() {
    // El componente controla la información a través del estado
    const [decadaInfame, setDecadaInfame] = useState(DECADA_INFAME);
    // Guarda el artículo actual | Por defecto está el primero
    const [index, setIndex] = useState(0);
    
    return <div className="row row-header justify-content-center">
        <Sidebar sections={[decadaInfame, index]} onClick={setIndex} />
        <RenderContent data={decadaInfame.filter(articulo => articulo.id === index)} />
    </div>
}
