import React, { useMemo } from 'react';
import styles from './RuneAnimation.module.css';

const RUNE_CHARACTERS = [
    { value: 'ᚠ', font: 'serif' },
    { value: 'ᚢ', font: 'serif' },
    { value: 'ᚦ', font: 'serif' },
    { value: 'ᚨ', font: 'serif' },
    { value: 'ᚱ', font: 'serif' },
    { value: 'ᛉ', font: 'serif' },
    { value: 'ᛒ', font: 'serif' },
    { value: 'ᛗ', font: 'serif' },
    { value: 'ᛟ', font: 'serif' },
];

const RuneParticles = ({ NUMBER_OF_RUNES }) => {
    // Використовуємо useMemo, щоб уникнути перерахунку при кожному рендері
    const runes = useMemo(() => {
        // Масив доступних анімацій з CSS модуля
        const animationClasses = [
            styles.flyUp,
            styles.flyDown,
            styles.flyLeft,
            styles.flyRight,
        ];

        return Array.from({ length: NUMBER_OF_RUNES }).map((_, index) => {
            const randomRune =
                RUNE_CHARACTERS[
                    Math.floor(Math.random() * RUNE_CHARACTERS.length)
                ];
            const randomAnimation =
                animationClasses[
                    Math.floor(Math.random() * animationClasses.length)
                ];

            const style = {
                fontSize: `${Math.random() * 20 + 15}px`, // Розмір від 15 до 35px
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 15 + 10}s`, // Тривалість від 10 до 25s
                fontFamily: randomRune.font,
            };

            // Встановлюємо початкову позицію залежно від напрямку анімації
            if (
                randomAnimation === styles.flyUp ||
                randomAnimation === styles.flyDown
            ) {
                // Для вертикального руху задаємо випадкову позицію по горизонталі
                style.left = `${Math.random() * 100}vw`;
            } else {
                // Для горизонтального руху задаємо випадкову позицію по вертикалі
                style.top = `${Math.random() * 100}vh`;
            }

            return (
                <span
                    key={index}
                    className={`${styles.rune} ${randomAnimation}`} // Комбінуємо базовий клас і клас анімації
                    style={style}
                >
                    {randomRune.value}
                </span>
            );
        });
    }, []); // Пустий масив залежностей означає, що руни генеруються один раз
    return <div className={styles.runeContainer}>{runes}</div>;
};

export default RuneParticles;
