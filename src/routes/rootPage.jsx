import Navigation from "../components/navigationBar"
import { Outlet } from "react-router-dom"

export async function loader() {
    window.scrollTo(0, 0);

    return null;
}

export default function Root() {
    return <div className="App">
        <Navigation className="navigation" />
        <div className="container-fluid contenedor">
            <Outlet />
        </div>
    </div>
}