import { Link } from "react-router-dom"

export default function RenderCard({src, alt, link, def = true}) {
    return <Link to={link} className="h-100">
        <div className={`card mb-2 rounded-3 ${def ? 'card-img' : ''}`}>
            <img src={src} alt={alt}/>
        </div>
    </Link>
}
