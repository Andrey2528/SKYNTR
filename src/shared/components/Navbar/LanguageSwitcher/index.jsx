import React, { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// Available languages configuration
const LANGUAGES = [
    { code: 'uk', label: 'УК' },
    { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    // Memoize languages to prevent unnecessary re-renders
    const languages = useMemo(() => LANGUAGES, []);

    // Memoize language change handler
    const changeLang = useCallback((lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    }, [i18n]);

    return (
        <div className="lang-switcher">
            {languages.map(({ code, label }) => (
                <button
                    key={code}
                    className={i18n.resolvedLanguage === code ? 'active' : ''}
                    onClick={() => changeLang(code)}
                    aria-label={`Switch language to ${label}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

LanguageSwitcher.propTypes = {};

export default LanguageSwitcher;
