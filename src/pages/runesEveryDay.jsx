import { motion } from 'framer-motion';
import RuneOfTheDay from '@/components/runeOfTheDay/runeOfTheDay';

const RunesEveryDay = () => {
    return (
        <motion.section
            className="rune-of-the-day"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <RuneOfTheDay />
        </motion.section>
    );
};

export default RunesEveryDay;
