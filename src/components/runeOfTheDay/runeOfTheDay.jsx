import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import runes from '@/api/runes/runes';

const RuneOfTheDay = () => {
    const { t } = useTranslation(); // Initialize the translation hook
    const [rune, setRune] = useState(null);

    useEffect(() => {
        const today = new Date();
        const seed =
            today.getFullYear() * 10000 +
            (today.getMonth() + 1) * 100 +
            today.getDate();
        const index = seed % runes.length;
        setRune(runes[index]);
    }, []);

    if (!rune) return null;

    return (
        <>
            <section className="rune-page">
                <section className="rune-of-the-day rune-card">
                    <h2 className="rune-title">{t('nav.rune')}</h2>
                    <div className="rune-symbol">{rune.symbol}</div>
                    <div className="rune-name">{rune.name}</div>
                    <p className="rune-meaning">{t(rune.meaningKey)}</p>
                    <p className="rune-desc">{t(rune.descriptionKey)}</p>
                </section>
                <section className="rune-container">
                    <h2 className="rune-title">
                        {t('runePage.allRunesTitle')}
                    </h2>
                    {/* Translate title */}
                    <div className="rune-list">
                        {runes.map((item) => (
                            <div className="rune-card" key={item.name}>
                                <div className="rune-name">{item.name}</div>
                                <div className="rune-symbol">{item.symbol}</div>
                                {/* Use t() with the translation keys for each item */}
                                <p className="rune-meaning">
                                    {t(item.meaningKey)}
                                </p>
                                <p className="rune-desc">
                                    {t(item.descriptionKey)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
};

export default RuneOfTheDay;
