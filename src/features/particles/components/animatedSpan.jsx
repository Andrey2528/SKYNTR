import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

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

AnimatedSpan.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    format: PropTypes.func,
    duration: PropTypes.number,
};

export default AnimatedSpan;
