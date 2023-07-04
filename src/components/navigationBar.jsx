import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Collapse,
} from 'reactstrap';

export default function Navigation({ className = "" }) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return <Navbar dark className={`bg-red navbar-expand-md ${className}`}>
        <NavLink className="navbar-brand" to="/">
            <img src="/argentina.svg" alt="Logo de la Argentina" style={{height: 30, width: 30}} />
            Argentina Política
        </NavLink>

        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className="ms-auto">
                <NavItem className="my-1 my-md-0">
                    <NavLink
                        to="/peronismo"
                        className={({isActive}) => 
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Peronismo
                    </NavLink>
                </NavItem>
                <NavItem className="my-1 my-md-0">
                    <NavLink
                        to="/menemismo"
                        className={({isActive}) => 
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Menemismo
                    </NavLink>
                </NavItem>
                <NavItem className="my-1 my-md-0">
                    <NavLink
                        to="/kirchnerismo"
                        className={({isActive}) => 
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Kirchnerismo
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
}