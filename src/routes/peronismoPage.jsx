import Sidebar from "../components/sidebar";
import Content from "../components/content";
import Aside from "../components/aside";

const sections = ["Comienzos", "Eva Duarte Perón", "Primer Gobierno", "Segundo Gobierno", "Proscripción", "Tercer Peronismo", 'Peronismo después de Perón'];

export default function Peronismo() {
    return <>
        <Sidebar sections={sections} />
        <Content />
        <Aside />
    </>
}