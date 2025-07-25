import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import '@/styles/pages/chronicles-timeline.scss';
import runes from '@/features/runes/api/runes';
import RuneParticles from '@/features/particles/components/RuneParticles/RuneParticles';

// Життєвий шлях - ключові етапи
const lifeJourneyData = [
    {
        id: 1,
        titleKey: 'lifeJourney.childhood.title',
        subtitleKey: 'lifeJourney.childhood.subtitle',
        year: '2002-2015',
        period: '13 років',
        descriptionKey: 'lifeJourney.childhood.description',
        tags: 'Дитинство, Навчання, Перші кроки',
        img: '/images/journey/childhood.jpg',
        milestone: 'foundation',
    },
    {
        id: 2,
        titleKey: 'lifeJourney.school.title',
        subtitleKey: 'lifeJourney.school.subtitle',
        year: '2015-2019',
        period: '4 роки',
        descriptionKey: 'lifeJourney.school.description',
        tags: 'Школа, Самовизначення, Перші проекти',
        img: '/images/journey/school.jpg',
        milestone: 'discovery',
    },
    {
        id: 3,
        titleKey: 'lifeJourney.university.title',
        subtitleKey: 'lifeJourney.university.subtitle',
        year: '2019-2023',
        period: '4 роки',
        descriptionKey: 'lifeJourney.university.description',
        tags: 'Університет, IT, Програмування',
        img: '/images/journey/university.jpg',
        milestone: 'growth',
    },
    {
        id: 4,
        titleKey: 'lifeJourney.firstJob.title',
        subtitleKey: 'lifeJourney.firstJob.subtitle',
        year: '2020-2024',
        period: '4 роки',
        descriptionKey: 'lifeJourney.firstJob.description',
        tags: 'Перша робота, Frontend, React',
        img: '/images/journey/first-job.jpg',
        milestone: 'achievement',
    },
    {
        id: 5,
        titleKey: 'lifeJourney.freelance.title',
        subtitleKey: 'lifeJourney.freelance.subtitle',
        year: '2021-2025',
        period: '4 роки',
        descriptionKey: 'lifeJourney.freelance.description',
        tags: 'Фріланс, Власні проекти, Розвиток',
        img: '/images/journey/freelance.jpg',
        milestone: 'independence',
    },
    {
        id: 6,
        titleKey: 'lifeJourney.present.title',
        subtitleKey: 'lifeJourney.present.subtitle',
        year: '2025-теперішнє',
        period: 'продовжується',
        descriptionKey: 'lifeJourney.present.description',
        tags: 'Сеніор, Менторство, Інновації',
        img: '/images/journey/present.jpg',
        milestone: 'mastery',
    },
];

const LifeJourneyEntry = ({ entry, rune }) => {
    const { t } = useTranslation();

    // Memoize tags to prevent recalculation on every render
    const tags = useMemo(() => {
        return entry.tags.split(', ');
    }, [entry.tags]);

    return (
        <div className={`chronicle-entry chronicle-entry--${entry.milestone}`}>
            {/* Точка на timeline */}
            <div className="chronicle-entry__milestone-point"></div>

            {/* Контент етапу */}
            <div className="chronicle-entry__content">
                <div className="rune-symbol">
                    <span className="rune-symbol__char">{rune.symbol}</span>
                    <span className="rune-symbol__name">{rune.name}</span>
                </div>

                <h2 className="chronicle-entry__title">{t(entry.titleKey)}</h2>
                <p className="chronicle-entry__subtitle">
                    {t(entry.subtitleKey)}
                </p>

                <div className="chronicle-entry__timeline">
                    <span className="chronicle-entry__date">{entry.year}</span>
                    <span className="chronicle-entry__period">
                        ({entry.period})
                    </span>
                </div>

                <div className="chronicle-entry__tags">
                    {tags.map((tag) => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="chronicle-entry__description">
                    {t(entry.descriptionKey)}
                </p>

                <div className="chronicle-entry__milestone">
                    <span className="milestone-indicator">
                        {t(`lifeJourney.milestones.${entry.milestone}`)}
                    </span>
                </div>
            </div>
        </div>
    );
};

LifeJourneyEntry.propTypes = {
    entry: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titleKey: PropTypes.string.isRequired,
        subtitleKey: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        milestone: PropTypes.string.isRequired,
    }).isRequired,
    rune: PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

const ChroniclesPage = () => {
    const { t } = useTranslation();

    // Memoize life journey entries
    const journeyEntries = useMemo(() => {
        return lifeJourneyData.map((entry, index) => (
            <LifeJourneyEntry
                key={entry.id}
                entry={entry}
                rune={runes[index % runes.length]}
            />
        ));
    }, []);

    return (
        <div className="chronicles chronicles--life-journey">
            {/* Фонові ефекти */}
            <div className="chronicles__background">
                <div className="chronicles__glow chronicles__glow--top"></div>
                <div className="chronicles__glow chronicles__glow--center"></div>
                <div className="chronicles__glow chronicles__glow--bottom"></div>
                <div className="chronicles__glow chronicles__glow--middle-left"></div>
                <div className="chronicles__glow chronicles__glow--middle-right"></div>

                {/* Анімовані руни на фоні */}
                <div className="chronicles__floating-runes">
                    {runes.slice(0, 8).map((rune, index) => (
                        <div
                            key={rune.name}
                            className={`floating-rune floating-rune--${index + 1}`}
                            style={{
                                animationDelay: `${index * 0.5}s`,
                                '--rune-color':
                                    index % 2 === 0 ? '#00F0FF' : '#A4D0F4',
                            }}
                        >
                            {rune.symbol}
                        </div>
                    ))}
                </div>

                {/* Частинки рун */}
                <div className="chronicles__rune-particles">
                    <RuneParticles count={12} />
                </div>
            </div>

            <header className="chronicles__header">
                <h1>{t('chroniclesPage.lifeJourney.title')}</h1>
                <p className="chronicles__intro">
                    {t('chroniclesPage.lifeJourney.intro')}
                </p>
            </header>

            <section className="chronicles__timeline">
                <div className="timeline-line"></div>
                {journeyEntries}
            </section>
        </div>
    );
};

export default ChroniclesPage;
