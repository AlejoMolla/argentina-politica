import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Routes
import Root from './routes/rootPage';
import ErrorPage, { ErrorElement } from './routes/errorPage';
import Peronismo from './routes/peronismoPage';
import Menemismo from './routes/menemismoPage';
import Kirchnerismo from './routes/kirchnerismoPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <div className="content d-flex justify-content-center"><ErrorElement /></div>,
                children: [
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
