import {
    Nav,
    NavItem,
    NavLink
} from "reactstrap"

export default function Sidebar({ sections = [], onClick }) {
    console.log(sections)
    return <div className="sidebar bg-body-tertiary pt-4">
        <Nav vertical>
            {sections[0].map(({titulo, id}) => (
                <NavItem className="mt-2" key={id}>
                    {console.log(id)}
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