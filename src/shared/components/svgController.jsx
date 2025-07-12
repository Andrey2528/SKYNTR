import React from 'react';
import PropTypes from 'prop-types';

import svg from '@/features/icon/api/svg';

const SvgController = ({ name, className }) => {
    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: svg[name] }}
        />
    );
};

SvgController.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default SvgController;
