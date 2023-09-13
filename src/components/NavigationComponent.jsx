import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    Nav as NavStrap,
    NavItem,
    Collapse,

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

// Items de la Nav
import { ITEMS_NAV } from '../assets/static/configs/navConfigs';

// Componente Nav
function Nav({ onItemClick }) {
    return <>
    
        <NavStrap navbar className="ms-auto">
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Secciones
                </DropdownToggle>
                <DropdownMenu>
                    { // Genera los items de la Nav
                        ITEMS_NAV.map(({id, texto, link}) => (
                            <DropdownItem className="my-1 my-md-0" key={id}>
                                <NavLink
                                    to={link}
                                    className={({isActive}) => 
                                        "nav-link text-" + (isActive ? "primary" : "dark")
                                    }
                                    onClick={onItemClick}
                                >
                                    {texto}
                                </NavLink>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink
                    to="/articulos"
                    className={({isActive}) =>
                        "nav-link" + (isActive ? " active" : "")
                    }
                    onClick={onItemClick}
                >
                    Artículos
                </NavLink>
            </NavItem>
        </NavStrap>
    
    </>
}

// Componente Brand
function NavbarBrand() {
    return <>
    
        <NavLink className="navbar-brand" to="/">
            <img src="images/Logos/logo.png" alt="Logo de la Argentina" style={{height: 30, width: 30}} />
            <span className="ms-2">Argentina Política</span>
        </NavLink>
    
    </>
}

export default function Navigation({ className = "" }) {
    // Controlar el colapso de la barra de navegación
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const closeNavbar = () => setCollapsed(true);

    return <Navbar dark className={`navbar-expand-md ${className} primary-bg fixed-top px-4`}>
            <NavbarBrand />

            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav onItemClick={closeNavbar} />
            </Collapse>
    </Navbar>
}

/*
<NavStrap navbar className="ms-auto">
            { // Genera los items de la Nav
                ITEMS_NAV.map(({id, texto, link}) => (
                    <NavItem className="my-1 my-md-0" key={id}>
                        <NavLink
                            to={link}
                            className={({isActive}) => 
                                "nav-link" + (isActive ? " active" : "")
                            }
                            onClick={onItemClick}
                        >
                            {texto}
                        </NavLink>
                    </NavItem>
                ))
            }
        </NavStrap>
*/