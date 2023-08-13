import { useState } from "react";
import { MENEMISMO } from "../../assets/static/menemismo";
import RenderContent from "../../components/RenderContentComponent";
import Sidebar from "../../components/SidebarComponent";

export default function Menemismo() {
    const [menemismo, setMenemismo] = useState(MENEMISMO);
    const [index, setIndex] = useState(0);
    return <div className="row row-header">
        <Sidebar sections={[menemismo, index]} onClick={setIndex} />
        <RenderContent data={menemismo.filter(per => per.id === index)} />
    </div>
}