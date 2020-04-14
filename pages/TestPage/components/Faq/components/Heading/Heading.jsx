import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

export function Heading({ title, subtitle, iconUrl }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('text')}>
        <h2 className={cx('title')}>{title}</h2>
        {subtitle && <p className={cx('subtitle')}>{subtitle}</p>}
      </div>
      {iconUrl && <img className={cx('icon')} src={iconUrl} alt="" />}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  iconUrl: PropTypes.string,
}