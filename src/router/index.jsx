import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Layout from '@/layout/layout';
import HomePage from '@/pages/home/HomePage';
import RunesEveryDay from '@/pages/runes/runesEveryDay';
import ChroniclesPage from '@/pages/chronicles/chronicles';
import AboutPage from '@/pages/about/AboutPage';
import {
    PAGE_HOME,
    PAGE_RUNE_EVERY_DAY,
    PAGE_PORTFOLIO,
    PAGE_ABOUT,
} from './routes';

// Routes configuration
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
