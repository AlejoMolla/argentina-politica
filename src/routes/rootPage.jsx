import Navigation from "../components/navigationBar"
import { Outlet } from "react-router-dom"

export default function Root() {
    return <div className="App">
        <Navigation className="navigation" />
        <div className="container-fluid contenedor">
            <div className="row justify-content-center  ">
                <Outlet />
            </div>
        </div>
    </div>
}