import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import '../styles/runePortal.scss';
import runes from '@/features/runes/api/runes';

const RunePortal = ({ size = 300, speed = 20, collapsed = false }) => {
    const radius = size / 2 - 20;
    const center = size / 2;

    // Memoize rune positions to prevent recalculation on every render
    const runeElements = useMemo(() => {
        return runes.map((rune, i) => {
            const angle = (2 * Math.PI * i) / runes.length;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            
            return (
                <text
                    key={rune.name}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#00f0ff"
                    fontSize={collapsed ? "12" : "20"}
                    fontFamily="serif"
                    transform={`rotate(${(angle * 180) / Math.PI + 90}, ${x}, ${y})`}
                >
                    {rune.symbol}
                </text>
            );
        });
    }, [center, radius, collapsed]);

    return (
        <div
            className="rune-portal-container"
            style={{ width: size, height: size, position: 'relative' }}
        >
            <div className="portal-glow">S</div>
            <motion.svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: 'linear',
                }}
            >
                {runeElements}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#00f0ff66"
                    strokeWidth={collapsed ? "1" : "2"}
                    fill="none"
                />
            </motion.svg>
        </div>
    );
};

RunePortal.propTypes = {
    size: PropTypes.number,
    speed: PropTypes.number,
    collapsed: PropTypes.bool,
};

export default RunePortal;
