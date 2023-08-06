import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './index.css';

// Routes
import Root, { loader as rootLoader } from './routes/rootPage';
import ErrorPage, { ErrorElement } from './routes/errorPage';
import Peronismo from './routes/peronismoPage';
import Menemismo from './routes/menemismoPage';
import Kirchnerismo from './routes/kirchnerismoPage';
import Index from './routes/indexPage';
import Fuentes from './routes/fuentes';
import Ilustres from './routes/ilustres';
import SanMartin from './routes/san_martin';
import MusicaEnArgentina from './routes/musica_en_argentina';
import Articulos, { IndexArticulos } from './routes/articulos';

const router = createHashRouter([
    {
        path: '/*',
        element: <Root />,
        loader: rootLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <div className="content d-flex justify-content-center"><ErrorElement /></div>,
                children: [
                    {index: true, element: <Index />},
                    {
                        path: 'peronismo',
                        element: <Peronismo />,
                    },
                    {
                        path: 'menemismo',
                        element: <Menemismo />,
                    },
                    {
                        path: 'kirchnerismo',
                        element: <Kirchnerismo />,
                    },
                    {
                        path: 'fuentes',
                        element: <Fuentes />,
                    },
                    {
                        path: 'articulos',
                        element: <Articulos />,
                        children: [
                            {index: true, element: <IndexArticulos />},
                            {
                                path: 'ilustres',
                                element: <Ilustres />
                            },
                            {
                                path: 'san_martin',
                                element: <SanMartin />
                            },
                            {
                                path: 'musica_argentina',
                                element: <MusicaEnArgentina />
                            }
                        ]
                    }
                ]
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
