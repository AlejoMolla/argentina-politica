import { Fragment, useEffect, useRef } from 'react';
import CardsComponent from './CardsComponent';

// Componente que arma y renderiza el contenido
function Content({ data, contentRef }) {
    return <>
    
        <div className="content pt-5 px-4 col-12 col-md-6 scrollable" ref={contentRef}>
            <h2>{data.titulo}</h2>
            { // Renderiza el contenido del artículo, separando por subtítulos
                data.contenido.map(({subtitulo, texto}, index) => (
                    <Fragment key={index}>
                        <h4 className="mt-5">{subtitulo}</h4>
                        { // Renderiza los párrafos del texto
                            texto.map((articulo, index) => (
                                <p className="lead" key={index}>
                                    {articulo}
                                </p>
                            ))
                        }
                    </Fragment>
                ))
            }
            {data.boton.isButton && // Renderiza los botones (Si hay) al final del contenido
                data.boton.children.map(({color, link, texto}, index) => (
                    <a target="_blank" className={`btn btn-${color}`} href={link} key={index}>
                        {texto}
                    </a>
                ))
                
            }
        </div>

    </>
}

// Componente que arma y renderiza el aside
function Aside({ data, asideRef }) {
    return <>
    
        <div className="aside col-12 col-sm-12 col-md-3 scrollable" ref={asideRef}>
            {/* CardsComponent se encarga de agregar el contenido al aside */}
            <CardsComponent
                image={{
                    src: data.aside.imagen.src,
                    alt: data.aside.imagen.alt
                }}
                body={{
                    titulo: data.aside.titulo,
                    contenido: data.aside.contenido,
                    boton: {
                        isButton: data.aside.boton.isButton,
                        children: data.aside.boton.children
                    }
                }}
            />
        </div>

    </>
}

export default function RenderContent({ data }) {
    // Data Item obtiene la información de un artículo, no de todos
    const dataItem = data[0];
    // Las referencias se aplican a `Content` y `Aside` para controlar el scroll
    const contentRef = useRef(null);
    const asideRef = useRef(null);

    // Devolver el scroll a 0 cada vez que cambie el artículo
    useEffect(function() {
        contentRef.current.scrollTo(0,0)
        asideRef.current.scrollTo(0,0)
    }, [dataItem]);

    return <>
        
        <Content data={dataItem} contentRef={contentRef} />
        <Aside data={dataItem} asideRef={asideRef} />
        
    </>
}
