import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

// Routes
import RootPage, { loader as rootLoader } from './routes/rootPage';
import ErrorPage, { ErrorElement } from './routes/errorPage';
import IndexPage from './routes/indexPage';
import FuentesPage from './routes/fuentes';
// - Páginas Principales
import PeronismoPage from './routes/Principales/peronismoPage';
import MenemismoPage from './routes/Principales/menemismoPage';
import KirchnerismoPage from './routes/Principales/kirchnerismoPage';
// - Articulos
import ArticulosPage, { IndexArticulos } from './routes/Articulos';
import IlustresPage from './routes/Articulos/ilustresPage';
import SanMartinPage from './routes/Articulos/sanMartinPage';
import MusicaEnArgentinaPage from './routes/Articulos/MusicaEnArgentinaPage';

const router = createHashRouter([
    {
        path: '/*',
        element: <RootPage />,
        loader: rootLoader,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <div className="content d-flex justify-content-center"><ErrorElement /></div>,
                children: [
                    {index: true, element: <IndexPage />},
                    {
                        path: 'peronismo',
                        element: <PeronismoPage />,
                    },
                    {
                        path: 'menemismo',
                        element: <MenemismoPage />,
                    },
                    {
                        path: 'kirchnerismo',
                        element: <KirchnerismoPage />,
                    },
                    {
                        path: 'fuentes',
                        element: <FuentesPage />,
                    },
                    {
                        path: 'articulos',
                        element: <ArticulosPage />,
                        children: [
                            {index: true, element: <IndexArticulos />},
                            {
                                path: 'ilustres',
                                element: <IlustresPage />
                            },
                            {
                                path: 'san_martin',
                                element: <SanMartinPage />
                            },
                            {
                                path: 'musica_argentina',
                                element: <MusicaEnArgentinaPage />
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
