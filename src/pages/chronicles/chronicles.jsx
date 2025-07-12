import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import '@/styles/index.scss';
import portfolioCard from '@/features/portfolio/api/portfolioCard';
import runes from '@/features/runes/api/runes';

const ChronicleEntry = ({ entry, rune }) => {
    const { t } = useTranslation();

    // Memoize tags to prevent recalculation on every render
    const tags = useMemo(() => {
        return entry.tag.split(', ');
    }, [entry.tag]);

    return (
        <div className="chronicle-entry">
            <div className="chronicle-entry__header">
                <div className="rune-symbol">
                    <span className="rune-symbol__char">{rune.symbol}</span>
                    <span className="rune-symbol__name">{rune.name}</span>
                </div>
                <img
                    src={entry.img}
                    alt={t(entry.title)}
                    className="chronicle-entry__image"
                />
            </div>
            <h2 className="chronicle-entry__title">{t(entry.title)}</h2>
            <p className="chronicle-entry__subtitle">{t(entry.subTitle)}</p>
            <p className="chronicle-entry__date">{entry.year}</p>
            <div className="chronicle-entry__tags">
                {tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="chronicle-entry__description">
                {t(entry.description)}
            </p>
            {entry.url && !entry.url.includes('urlNotAviable') && (
                <a
                    className="chronicle-entry__link"
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('chroniclesPage.viewProject')}
                </a>
            )}
        </div>
    );
};

ChronicleEntry.propTypes = {
    entry: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string,
        img: PropTypes.string.isRequired,
    }).isRequired,
    rune: PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

const ChroniclesPage = () => {
    const { t } = useTranslation();

    // Memoize chronicle entries to prevent regeneration on every render
    const chronicleEntries = useMemo(() => {
        return portfolioCard.map((entry, index) => (
            <ChronicleEntry
                key={entry.id}
                entry={entry}
                rune={runes[index % runes.length]}
            />
        ));
    }, [t]);

    return (
        <div className="chronicles">
            <header className="chronicles__header">
                <h1>{t('chroniclesPage.headerTitle')}</h1>
                <p className="chronicles__intro">
                    {t('chroniclesPage.headerIntro')}
                </p>
            </header>

            <section className="chronicles__list">
                {chronicleEntries}
            </section>
        </div>
    );
};

export default ChroniclesPage;
