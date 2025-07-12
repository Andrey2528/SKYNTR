import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import '@/styles/index.scss';

const runes = ['ᛋ', 'ᚲ', 'ᛦ', 'ᚾ', 'ᛏ', 'ᚱ'];

const RunesIntro = ({ onComplete }) => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLogo(true);
            onComplete?.();
        }, 3200); // трохи довше за останню руну

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="runes-intro">
            <AnimatePresence>
                {!showLogo &&
                    runes.map((rune, i) => (
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
                                delay: i * 0.3,
                                duration: 0.6,
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
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        SKYNTR
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RunesIntro;
