import {
    Nav,
    NavItem,
    NavLink
} from "reactstrap"

export default function Sidebar({ sections = [], onClick }) {
    return <div className="sidebar bg-body-tertiary pt-4 col-12 col-md-3">
        <Nav vertical>
            {sections[0].map(({titulo, id}) => (
                <NavItem className="mt-2" key={id}>
                    <NavLink
                        style={{cursor: 'pointer'}}
                        onClick={() => onClick(id)}
                        className={sections[1] == id ? ' active' : ''}
                    >
                        {titulo}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    </div>
}