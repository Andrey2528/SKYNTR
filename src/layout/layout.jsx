import { Outlet } from 'react-router-dom';
import '@/styles/index.scss';
import { NavbarAside } from '@/shared/components';
import RunesIntro from '@/components/particles/runesIntro';

import { useState } from 'react';
import RuneRainLoader from '@/components/particles/runeRainLoader';

const Layout = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className="dashboard__background" />
            {showIntro ? (
                <RunesIntro onComplete={() => setShowIntro(false)} />
            ) : (
                <main className="Layout">
                    <section className="Layout__section">
                        <NavbarAside
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                        />
                        <RuneRainLoader collapsed={collapsed} />
                        <Outlet />
                    </section>
                </main>
            )}
        </>
    );
};

export default Layout;
