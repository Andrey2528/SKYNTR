import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import atmosphericUpdates from '../api/updates';

import '../styles/AtmosphericUpdate.scss';

const AtmosphericUpdate = () => {
    const { t } = useTranslation();
    const [update, setUpdate] = useState(null);

    // Memoize random update selection to prevent recalculation
    const randomUpdate = useMemo(() => {
        return atmosphericUpdates[
            Math.floor(Math.random() * atmosphericUpdates.length)
        ];
    }, []);

    useEffect(() => {
        setUpdate(randomUpdate);
    }, [randomUpdate]);

    if (!update) return null;

    return (
        <div className="update-card__desc">
            <span className="icon">{update.icon}</span>
            <span className="text">{t(update.textKey)}</span>
        </div>
    );
};

export default AtmosphericUpdate;
