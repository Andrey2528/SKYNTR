// src/pages/AboutPage.jsx
import React from 'react';
import '@/styles/index.scss';
import { useTranslation, Trans } from 'react-i18next';
import RuneParticles from '@/components/particles/RuneParticles/RuneParticles';

import '@/styles/index.scss';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="about">
                <RuneParticles NUMBER_OF_RUNES={50} />
                <div className="about__header">
                    <h1 className="about__title">SKYNTR</h1>
                    <p className="about__subtitle">{t('about.subtitle')}</p>
                </div>

                <div className="about__content">
                    <blockquote className="about__quote">
                        “У світі, де дані — нова магія, Skyntr — це код,
                        викарбуваний рунами.”
                    </blockquote>
                    <Trans i18nKey="about.mission" components={{ 1: <br /> }} />
                    <Trans
                        i18nKey="about.philosophy"
                        components={{ 1: <br /> }}
                    />

                    <p>{t('about.technology')}</p>
                </div>
                <div className="about__timeline">
                    <div className="timeline-item" data-rune="ᚠ">
                        <h3>Початок</h3>
                        <p>
                            Ідея Skyntr виникла як синтез коду й символів
                            давнини.
                        </p>
                    </div>
                    <div className="timeline-item" data-rune="ᚱ">
                        <h3>Форма</h3>
                        <p>Ми створили візуальну мову на основі футарку.</p>
                    </div>
                    <div className="timeline-item" data-rune="ᛗ">
                        <h3>Місія</h3>
                        <p>
                            Об'єднати технології та міфологію в цифровому
                            просторі.
                        </p>
                    </div>
                    <div className="timeline-item" data-rune="ᛟ">
                        <h3>Майбутнє</h3>
                        <p>
                            Skyntr розвивається як бренд і філософія творення.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
