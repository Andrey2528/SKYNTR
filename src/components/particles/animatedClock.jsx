import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/index.scss';

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

// Тепер DigitGroup - це компонент, який приймає пропси у вигляді обʼєкта
const DigitGroup = ({ value, label }) => (
    <AnimatePresence mode="sync">
        {value.split('').map((char, i) => (
            <motion.span
                key={`${label}-${i}-${char}`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {char}
            </motion.span>
        ))}
    </AnimatePresence>
);

const AnimatedClock = () => {
    const [time, setTime] = useState(getTimeParts());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeParts());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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
