import { useState } from "react";
import { PERONISMO } from "../../assets/static/peronismo";
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";

export default function Peronismo() {
    const [peronismo, setPeronismo] = useState(PERONISMO);
    console.log(peronismo)
    const [index, setIndex] = useState(0);
    return <div className="row row-header justify-content-center">
        <Sidebar sections={[peronismo, index]} onClick={setIndex} />
        <RenderContent data={peronismo.filter(articulo => articulo.id === index)} />
    </div>
}
