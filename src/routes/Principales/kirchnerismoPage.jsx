import { useState } from "react";
import { KIRCHNERISMO } from "../../assets/static/kirchnerismo";
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";

export default function Kirchnerismo() {
    const [kirchnerismo, setKirchnerismo] = useState(KIRCHNERISMO);
    const [index, setIndex] = useState(0);
    return <div className="row row-header">
        <Sidebar sections={[kirchnerismo, index]} onClick={setIndex} />
        <RenderContent data={kirchnerismo.filter(per => per.id === index)} />
    </div>
}