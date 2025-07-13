import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


import { NavbarAside } from '@/shared/components';
import RunesIntro from '@/features/particles/components/runesIntro';
import RuneRainLoader from '@/features/particles/components/runeRainLoader';

const Layout = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    return (
        <>
            <div className="dashboard__background" />
            {showIntro ? (
                <RunesIntro onComplete={handleIntroComplete} />
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
