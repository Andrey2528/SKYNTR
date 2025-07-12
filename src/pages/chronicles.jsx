import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '@/styles/index.scss';
import portfolioCard from '@/api/portfolioCard';

const ChronicleEntry = ({ entry }) => {
    const { t } = useTranslation();
    return (
        <div className="chronicle-entry">
            <div className="chronicle-entry__image-container">
                <img
                    src={entry.img}
                    alt={entry.title}
                    className="chronicle-entry__image"
                />
            </div>
            <h2 className="chronicle-entry__title">{t(entry.title)}</h2>
            <p className="chronicle-entry__subtitle">{t(entry.subTitle)}</p>
            <p className="chronicle-entry__date">{t(entry.year)}</p>
            <div className="chronicle-entry__tags">
                {entry.tag.split(', ').map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="chronicle-entry__description">
                {t(entry.description)}
            </p>
            {entry.url && entry.url.includes('urlNotAviable') ? (
                <p className="chronicle-entry__link-unavailable">
                    {t('portfolioCard.urlNotAviable')}
                </p>
            ) : (
                entry.url && (
                    <a
                        className="chronicle-entry__link"
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('chroniclesPage.viewProject')}
                    </a>
                )
            )}
        </div>
    );
};

const ChroniclesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="chronicles">
            <header className="chronicles__header">
                <h1>{t('chroniclesPage.headerTitle')}</h1>
                <p className="chronicles__intro">
                    {t('chroniclesPage.headerIntro')}
                </p>
            </header>

            <section className="chronicles__list">
                {portfolioCard.map((entry) => (
                    <ChronicleEntry key={entry.id} entry={entry} />
                ))}
            </section>
        </div>
    );
};

export default ChroniclesPage;
