import React from 'react';
import { motion } from 'framer-motion';

import RuneOfTheDay from '@/features/runes/components/runeOfTheDay';

// Animation configuration
const ANIMATION_DURATION = 0.8;
const ANIMATION_EASE = 'easeOut';

const RunesEveryDay = () => {
    return (
        <motion.section
            className="rune-of-the-day"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
        >
            <RuneOfTheDay />
        </motion.section>
    );
};

export default RunesEveryDay;
