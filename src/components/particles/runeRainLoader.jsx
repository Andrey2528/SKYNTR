import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import runes from '@/api/runes/runes';
import '@/styles/index.scss';

const RuneRainLoader = () => {
    const location = useLocation();
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, 1000); // тривалість анімації

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!show) return null;

    return (
        <div className="rune-rain-loader">
            {Array.from({ length: 30 }).map((_, i) => {
                const rune = runes[Math.floor(Math.random() * runes.length)];
                const left = Math.random() * 100;
                const delay = Math.random() * 2;
                const duration = 2;

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
            })}
        </div>
    );
};

export default RuneRainLoader;
