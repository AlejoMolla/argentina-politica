import Navigation from "../components/navigationBar"
import { Outlet } from "react-router-dom"

export default function Root() {
    return <div className="App">
        <Navigation className="navigation" />
        <Outlet />
    </div>
}