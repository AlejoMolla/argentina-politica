import { useRouteError } from "react-router-dom"

// Componente ErrorElement | Muestra el Error
export function ErrorElement() {
    const error = useRouteError();
    console.error(error); // Lo imprime por pantalla para más detalles

    return <div className="error-element">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
}

// Devuelve el ErrorElement adaptado a pantalla completa | Se usa parar RootPage | No cuando está renderizado a través de outlet
export default function ErrorPage() {
    return <div className="row row-header">
        <div className="error-page">
            <ErrorElement />
        </div>
    </div>
}
