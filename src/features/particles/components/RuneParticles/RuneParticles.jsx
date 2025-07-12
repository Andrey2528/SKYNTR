import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './RuneAnimation.module.css';

// Configuration constants
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

const FONT_SIZE_MIN = 15;
const FONT_SIZE_MAX = 35;
const ANIMATION_DELAY_MAX = 20;
const ANIMATION_DURATION_MIN = 10;
const ANIMATION_DURATION_MAX = 25;

const RuneParticles = ({ NUMBER_OF_RUNES }) => {
    // Memoize runes to prevent regeneration on every render
    const runes = useMemo(() => {
        const animationClasses = [
            styles.flyUp,
            styles.flyDown,
            styles.flyLeft,
            styles.flyRight,
        ];

        return Array.from({ length: NUMBER_OF_RUNES }).map((_, index) => {
            const randomRune = RUNE_CHARACTERS[
                Math.floor(Math.random() * RUNE_CHARACTERS.length)
            ];
            const randomAnimation = animationClasses[
                Math.floor(Math.random() * animationClasses.length)
            ];

            const style = {
                fontSize: `${Math.random() * (FONT_SIZE_MAX - FONT_SIZE_MIN) + FONT_SIZE_MIN}px`,
                animationDelay: `${Math.random() * ANIMATION_DELAY_MAX}s`,
                animationDuration: `${Math.random() * (ANIMATION_DURATION_MAX - ANIMATION_DURATION_MIN) + ANIMATION_DURATION_MIN}s`,
                fontFamily: randomRune.font,
            };

            // Set initial position based on animation direction
            if (randomAnimation === styles.flyUp || randomAnimation === styles.flyDown) {
                style.left = `${Math.random() * 100}vw`;
            } else {
                style.top = `${Math.random() * 100}vh`;
            }

            return (
                <span
                    key={index}
                    className={`${styles.rune} ${randomAnimation}`}
                    style={style}
                >
                    {randomRune.value}
                </span>
            );
        });
    }, [NUMBER_OF_RUNES]);

    return <div className={styles.runeContainer}>{runes}</div>;
};

RuneParticles.propTypes = {
    NUMBER_OF_RUNES: PropTypes.number.isRequired,
};

export default RuneParticles;
