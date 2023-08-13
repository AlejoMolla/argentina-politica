import Navigation from "../components/NavigationComponent"
import { Outlet } from "react-router-dom"

// Devuelve el scroll a 0 en '/'
export async function loader() {
    window.scrollTo(0, 0);

    return null;
}

export default function Root() {
    return <div className="App hv-100">
        <Navigation className="navigation" />
        <div className="container-fluid contenedor">
            <Outlet />
        </div>
    </div>
}
