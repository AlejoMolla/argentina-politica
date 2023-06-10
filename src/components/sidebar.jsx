import {
    Nav,
    NavItem,
} from "reactstrap"
import { NavLink } from "react-router-dom"

export default function Sidebar({ sections = [] }) {
    return <div className="sidebar bg-body-tertiary">
        <Nav vertical className="">
            {sections.map(link => (
                <NavItem className="mt-2" key={link.toLowerCase().replaceAll(" ", "-")}>
                    <NavLink
                        
                        to={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                        className={({isActive}) => "nav-link" + (isActive ? ' active' : '')}
                    >
                        {link}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    </div>
}