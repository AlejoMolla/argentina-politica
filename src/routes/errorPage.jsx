import { useRouteError } from "react-router-dom"

export function ErrorElement() {
    const error = useRouteError();
    console.error(error);

    return <div className="error-element">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
}

export default function ErrorPage() {
    return <div className="row row-header">
        <div className="error-page">
            <ErrorElement />
        </div>
    </div>
}