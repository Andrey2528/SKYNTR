import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'uk', label: 'УК' },
    { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLang = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    };

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

export default LanguageSwitcher;
