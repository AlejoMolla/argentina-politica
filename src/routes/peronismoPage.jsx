import { useState } from "react";
import { PERONISMO } from "../assets/static/peronismo";
import RenderContent from "../components/renderContent";
import Sidebar from "../components/sidebar";

export default function Peronismo() {
    const [peronismo, setPeronismo] = useState(PERONISMO);
    const [index, setIndex] = useState(1);
    return <>
        <Sidebar sections={[peronismo, index]} onClick={setIndex} />
        <RenderContent fileJson={peronismo.filter(per => per.id === index)} />
    </>
}