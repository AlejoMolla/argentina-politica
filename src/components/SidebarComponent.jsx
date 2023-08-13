import {
    Nav,
    NavItem,
    NavLink
} from "reactstrap"

export default function Sidebar({ sections = [], onClick }) {
    // sections[0] = Todos los artículos de la página (Peronismo, Menemismo o Kirchnerismo)
    // sections[1] = ID del artículo activo

    return <div className="sidebar bg-body-tertiary pt-4 col-12 col-md-3">
        <Nav vertical>
            { // Renderiza solo los títulos en el aside como Items de Nav
                sections[0].map(({titulo, id}) => (
                    <NavItem className="mt-2" key={id}>
                        <NavLink
                            style={{cursor: 'pointer'}}
                            // Función para cambiar el ID activo por el que se presionó
                            onClick={() => onClick(id)}
                            // Si está en el artículo, se le da un color resaltado en el aside
                            className={sections[1] == id ? ' active' : ''}
                        >
                            {titulo}
                        </NavLink>
                    </NavItem>
                ))
            }
        </Nav>
    </div>
}
