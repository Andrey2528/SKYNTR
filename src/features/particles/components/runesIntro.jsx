import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import '@/styles/index.scss';

// Configuration constants
const RUNES = ['ᛋ', 'ᚲ', 'ᛦ', 'ᚾ', 'ᛏ', 'ᚱ'];
const LOGO_DELAY = 3200;
const RUNE_DELAY = 0.3;
const RUNE_DURATION = 0.6;
const LOGO_DURATION = 1;
const LOGO_ANIMATION_DELAY = 0.2;

const RunesIntro = ({ onComplete }) => {
    const [showLogo, setShowLogo] = useState(false);

    const handleComplete = useCallback(() => {
        setShowLogo(true);
        onComplete?.();
    }, [onComplete]);

    useEffect(() => {
        const timeout = setTimeout(handleComplete, LOGO_DELAY);
        return () => clearTimeout(timeout);
    }, [handleComplete]);

    return (
        <div className="runes-intro">
            <AnimatePresence>
                {!showLogo &&
                    RUNES.map((rune, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{
                                scale: 1.4,
                                opacity: 0,
                                rotate: 20,
                                color: '#FF6B00',
                                textShadow: '0 0 20px #FF6B00',
                            }}
                            transition={{
                                delay: i * RUNE_DELAY,
                                duration: RUNE_DURATION,
                                ease: 'easeOut',
                            }}
                            className="rune"
                        >
                            {rune}
                        </motion.span>
                    ))}

                {showLogo && (
                    <motion.h1
                        className="skyntr-logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: LOGO_DURATION, delay: LOGO_ANIMATION_DELAY }}
                    >
                        SKYNTR
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
};

RunesIntro.propTypes = {
    onComplete: PropTypes.func,
};

export default RunesIntro;
