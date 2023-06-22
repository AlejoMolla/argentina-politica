import { useState } from "react";
import { KIRCHNERISMO } from "../assets/static/kirchnerismo";
import RenderContent from "../components/renderContent";
import Sidebar from "../components/sidebar";

export default function Kirchnerismo() {
    const [kirchnerismo, setKirchnerismo] = useState(KIRCHNERISMO);
    const [index, setIndex] = useState(1);
    return <>
        <Sidebar sections={[kirchnerismo, index]} onClick={setIndex} />
        <RenderContent fileJson={kirchnerismo.filter(per => per.id === index)} />
    </>
}