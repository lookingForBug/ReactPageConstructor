import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

export function ContentWrapper({ children, backgroundProps }) {
  return (
    <div style={backgroundProps} className={cx('wrapper')}>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
}

ContentWrapper.propTypes = {
  backgroundProps: PropTypes.shape({
    background: PropTypes.string,
  })
}

ContentWrapper.defaultProps = {
  backgroundProps: {
    background: '#FEF8F5',
  }
}