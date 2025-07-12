import { motion } from 'framer-motion';
import RuneOfTheDay from '@/components/runeOfTheDay/runeOfTheDay';
import RuneParticles from '@/components/particles/RuneParticles/RuneParticles';

const RunesEveryDay = () => {
    return (
        <motion.section
            className="rune-of-the-day"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <RuneParticles NUMBER_OF_RUNES={150} />
            <RuneOfTheDay />
        </motion.section>
    );
};

export default RunesEveryDay;
