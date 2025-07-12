import React, { useEffect, useState, useMemo } from 'react';

import atmosphericUpdates from '@/features/icon/api/updates';
import '@/styles/index.scss';

const AtmosphericUpdate = () => {
    const [update, setUpdate] = useState(null);

    // Memoize random update selection to prevent recalculation
    const randomUpdate = useMemo(() => {
        return atmosphericUpdates[Math.floor(Math.random() * atmosphericUpdates.length)];
    }, []);

    useEffect(() => {
        setUpdate(randomUpdate);
    }, [randomUpdate]);

    if (!update) return null;

    return (
        <div className="update-card__desc">
            <span className="icon">{update.icon}</span>
            <span className="text">{update.text}</span>
        </div>
    );
};

export default AtmosphericUpdate;
