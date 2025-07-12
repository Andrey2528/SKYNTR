import React, { useEffect, useState } from 'react';
import atmosphericUpdates from '@/api/icon/updates';
import '@/styles/index.scss';

const AtmosphericUpdate = () => {
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        const random =
            atmosphericUpdates[
                Math.floor(Math.random() * atmosphericUpdates.length)
            ];
        setUpdate(random);
    }, []);

    if (!update) return null;

    return (
        <div className="update-card__desc">
            <span className="icon">{update.icon}</span>
            <span className="text">{update.text}</span>
        </div>
    );
};

export default AtmosphericUpdate;
