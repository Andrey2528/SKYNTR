import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import runes from '@/features/runes/api/runes';
import '@/styles/index.scss';

// Configuration constants
const ANIMATION_DURATION = 1500;
const RUNE_COUNT = 30;
const ANIMATION_DELAY_RANGE = 2;
const ANIMATION_DURATION_RANGE = 2;

const RuneRainLoader = ({ collapsed }) => {
    const location = useLocation();
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, ANIMATION_DURATION);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Memoize rune elements to prevent regeneration on every render
    const runeElements = useMemo(() => {
        return Array.from({ length: RUNE_COUNT }).map((_, i) => {
            const rune = runes[Math.floor(Math.random() * runes.length)];
            const left = Math.random() * 100;
            const delay = Math.random() * ANIMATION_DELAY_RANGE;
            const duration = ANIMATION_DURATION_RANGE;

            return (
                <span
                    key={i}
                    className="rune"
                    style={{
                        left: `${left}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                    }}
                >
                    {rune.symbol}
                </span>
            );
        });
    }, []);

    if (!show) return null;

    return (
        <div className={`rune-rain-loader ${collapsed ? 'collapsed' : ''}`}>
            {runeElements}
        </div>
    );
};

RuneRainLoader.propTypes = {
    collapsed: PropTypes.bool,
};

export default RuneRainLoader;
