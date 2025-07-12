import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';

// App imports
import router from '@/router';
import './i18n/index';
import '@/styles/index.scss';

// Initialize Google Analytics
ReactGA.initialize('G-1C7BB6MY4W', { debug: false });

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
