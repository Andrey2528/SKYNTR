import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedSpan = ({
    from = 0,
    to = 100,
    format = (n) => Math.floor(n),
    duration = 1000,
}) => {
    const { number } = useSpring({
        from: { number: from },
        to: { number: to },
        config: { duration },
    });

    return <animated.span>{number.to(format)}</animated.span>;
};

export default AnimatedSpan;
