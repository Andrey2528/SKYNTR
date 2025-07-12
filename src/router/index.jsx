import { createHashRouter } from 'react-router-dom';

import { HomePage } from '@/pages';
import RunesEveryDay from '@/pages/runesEveryDay/runesEveryDay';

import Layout from '@/layout/layout';

import { PAGE_HOME, PAGE_RUNE_EVERY_DAY } from './routes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_RUNE_EVERY_DAY, element: <RunesEveryDay /> },
        ],
    },
];

export default createHashRouter(routes);
