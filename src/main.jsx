import router from '@/router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { RouterProvider } from 'react-router-dom';
import './i18n/index';
import '@/styles/index.scss';

ReactGA.initialize('G-1C7BB6MY4W', { debug: false });

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
