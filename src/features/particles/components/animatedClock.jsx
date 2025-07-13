import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';



// Configuration constants
const UPDATE_INTERVAL = 1000;
const ANIMATION_DURATION = 0.2;

const getTimeParts = () => {
    const now = new Date();
    return {
        hours: now.getHours().toString().padStart(2, '0'),
        minutes: now.getMinutes().toString().padStart(2, '0'),
        seconds: now.getSeconds().toString().padStart(2, '0'),
        date: now.toLocaleDateString(undefined, {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }),
    };
};

const DigitGroup = ({ value, label }) => (
    <AnimatePresence mode="sync">
        {value.split('').map((char, i) => (
            <motion.span
                key={`${label}-${i}-${char}`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: ANIMATION_DURATION }}
            >
                {char}
            </motion.span>
        ))}
    </AnimatePresence>
);

DigitGroup.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const AnimatedClock = () => {
    const [time, setTime] = useState(getTimeParts);

    const updateTime = useCallback(() => {
        setTime(getTimeParts());
    }, []);

    useEffect(() => {
        const interval = setInterval(updateTime, UPDATE_INTERVAL);
        return () => clearInterval(interval);
    }, [updateTime]);

    return (
        <div className="animated-clock">
            <div className="clock-time">
                <DigitGroup value={time.hours} label="h" />
                <span>:</span>
                <DigitGroup value={time.minutes} label="m" />
                <span>:</span>
                <DigitGroup value={time.seconds} label="s" />
            </div>
            <div className="clock-date">{time.date}</div>
        </div>
    );
};

export default AnimatedClock;
