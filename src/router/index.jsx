import { createHashRouter } from 'react-router-dom';

import { HomePage, RunesEveryDay, ChroniclesPage } from '@/pages';

import Layout from '@/layout/layout';

import {
    PAGE_HOME,
    PAGE_RUNE_EVERY_DAY,
    PAGE_PORTFOLIO,
    PAGE_ABOUT,
} from './routes';
import AboutPage from '@/pages/AboutPage';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_RUNE_EVERY_DAY, element: <RunesEveryDay /> },
            { path: PAGE_PORTFOLIO, element: <ChroniclesPage /> },
            { path: PAGE_ABOUT, element: <AboutPage /> },
        ],
    },
];

export default createHashRouter(routes);
