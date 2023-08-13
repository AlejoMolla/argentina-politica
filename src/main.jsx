import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

// Routes
import RootPage, { loader as rootLoader } from './routes/RootPage';
import ErrorPage, { ErrorElement } from './routes/ErrorPage';
import IndexPage from './routes/IndexPage';
import FuentesPage from './routes/FuentesPage';

// - Páginas Principales
import PeronismoPage from './routes/Principales/PeronismoPage';
import MenemismoPage from './routes/Principales/MenemismoPage';
import KirchnerismoPage from './routes/Principales/KirchnerismoPage';

// - Articulos
import ArticulosPage, { IndexArticulos } from './routes/Articulos/Index';
import IlustresPage from './routes/Articulos/IlustresPage';
import SanMartinPage from './routes/Articulos/SanMartinPage';
import MusicaEnArgentinaPage from './routes/Articulos/MusicaEnArgentinaPage';

const router = createHashRouter([
    {
        path: '/*',
        element: <RootPage />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
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
