import { useState } from "react";
import { PERONISMO } from "../assets/static/peronismo";
import RenderContent from "../components/renderContent";
import Sidebar from "../components/sidebar";

export default function Peronismo() {
    const [peronismo, setPeronismo] = useState(PERONISMO);
    console.log(peronismo)
    const [index, setIndex] = useState(0);
    return <div className="row row-header justify-content-center">
        <Sidebar sections={[peronismo, index]} onClick={setIndex} />
        <RenderContent fileJson={peronismo.filter(articulo => articulo.id === index)} />
    </div>
}