import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import '@/styles/index.scss';
import { motion } from 'framer-motion';
import AnimatedSpan from '@/components/particles/animatedSpan';
import AnimatedClock from '@/components/particles/animatedClock';
import AtmosphericUpdate from '@/components/atmosphericUpdate/AtmosphericUpdate';
import { useTranslation } from 'react-i18next';
import RuneParticles from '@/components/particles/RuneParticles/RuneParticles';

const HomePage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

    const startDate = new Date(2019, 8); // Вересень 2019 (September 2019)
    const now = new Date();
    const monthsOfExperience =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

    // These variables are already calculated correctly for the final display
    const years = Math.floor(monthsOfExperience / 12);
    const months = monthsOfExperience % 12;

    return (
        <div className="dashboard">
            <main className="dashboard__main">
                <section className="dashboard__hero">
                    <div className="row">
                        <motion.h1
                            className="dashboard__title"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            SKYNTR
                        </motion.h1>
                        <AnimatedClock />
                    </div>
                    <p className="dashboard__subtitle">
                        {t('home.welcomeText')}
                    </p>
                    <button className="dashboard__cta">
                        {t('home.getStarted')}
                    </button>
                </section>

                <section className="dashboard__stats">
                    <div className="stat-card">
                        <div className="stat-card__label">
                            {t('home.projects')}
                        </div>
                        <div className="stat-card__value">
                            <AnimatedSpan from={0} to={12} duration={1500} />
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__label">
                            {t('home.yearsOfWork')}
                        </div>
                        <div className="stat-card__value">
                            <AnimatedSpan
                                from={0}
                                to={monthsOfExperience}
                                duration={2000}
                                format={(n) => {
                                    // Use Math.round to ensure whole numbers during animation
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
                                }}
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
