import { useState } from "react";
import { PERONISMO } from "../assets/static/peronismo";
import RenderContent from "./renderContent";
import Sidebar from "./sidebar";

export default function Content() {
    const [peronismo, setPeronismo] = useState(PERONISMO);
    const [index, setIndex] = useState(1);
    return <>
        <Sidebar sections={peronismo} onClick={setIndex} />
        <RenderContent fileJson={peronismo.filter(per => per.id === index)} />
    </>
}