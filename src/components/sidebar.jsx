import {
    Nav,
    NavItem,
    NavLink
} from "reactstrap"

export default function Sidebar({ sections = [], onClick }) {
    return <div className="sidebar bg-body-tertiary">
        <Nav vertical>
            {sections.map(({titulo, id}) => (
                <NavItem className="mt-2" key={id}>
                    <NavLink
                        onClick={() => onClick(id)}
                    >
                        {titulo}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    </div>
}