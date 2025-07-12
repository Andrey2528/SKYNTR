import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';

import '@/styles/index.scss';
import AnimatedSpan from '@/features/particles/components/animatedSpan';
import AnimatedClock from '@/features/particles/components/animatedClock';
import AtmosphericUpdate from '@/features/atmospheric/components/AtmosphericUpdate';
import RunePortal from '@/features/particles/components/runePortal';

// Configuration constants
const START_DATE = new Date(2019, 8); // September 2019
const ANIMATION_DURATION = 1;
const PORTAL_SIZE = 200;
const PORTAL_SPEED = 25;
const STATS_ANIMATION_DURATION = 1500;
const EXPERIENCE_ANIMATION_DURATION = 2000;

const HomePage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

    // Memoize experience calculation to prevent recalculation on every render
    const experienceData = useMemo(() => {
        const now = new Date();
        const monthsOfExperience = (now.getFullYear() - START_DATE.getFullYear()) * 12 + (now.getMonth() - START_DATE.getMonth());
        const years = Math.floor(monthsOfExperience / 12);
        const months = monthsOfExperience % 12;

        return {
            monthsOfExperience,
            years,
            months,
        };
    }, []);

    const formatExperience = (n) => {
        const animatedMonths = Math.round(n);
        const y = Math.floor(animatedMonths / 12);
        const m = animatedMonths % 12;

        if (y > 0 && m > 0) {
            return `${y} ${t('home.year', { count: y })} ${m} ${t('home.month', { count: m })}`;
        }
        if (y > 0) {
            return `${y} ${t('home.year', { count: y })}`;
        }
        if (m > 0) {
            return `${m} ${t('home.month', { count: m })}`;
        }
        return '';
    };

    return (
        <div className="dashboard">
            <main className="dashboard__main">
                <section className="dashboard__hero">
                    <div className="row">
                        <motion.h1
                            className="dashboard__title"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: ANIMATION_DURATION }}
                        >
                            SKYNTR
                        </motion.h1>
                        <AnimatedClock />
                    </div>
                    <div className="row">
                        <div className="column">
                            <p className="dashboard__subtitle">
                                {t('home.welcomeText')}
                            </p>
                            <button className="dashboard__cta">
                                {t('home.getStarted')}
                            </button>
                        </div>
                        <RunePortal size={PORTAL_SIZE} speed={PORTAL_SPEED} />
                    </div>
                </section>

                <section className="dashboard__stats">
                    <div className="stat-card">
                        <div className="stat-card__label">
                            {t('home.projects')}
                        </div>
                        <div className="stat-card__value">
                            <AnimatedSpan from={0} to={12} duration={STATS_ANIMATION_DURATION} />
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__label">
                            {t('home.yearsOfWork')}
                        </div>
                        <div className="stat-card__value">
                            <AnimatedSpan
                                from={0}
                                to={experienceData.monthsOfExperience}
                                duration={EXPERIENCE_ANIMATION_DURATION}
                                format={formatExperience}
                            />
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__label">
                            {t('home.watchword')}
                        </div>
                        <div className="stat-card__desc">
                            {t('home.watchwordDesc')}
                        </div>
                    </div>
                </section>

                <section className="dashboard__updates">
                    <span className="update-card__title">
                        {t('home.odinModeReleased')}
                    </span>
                    <div className="update-card">
                        <AtmosphericUpdate />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
