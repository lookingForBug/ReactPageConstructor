import React from 'react';
import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

export type HeadingPropsType = {
  title: string,
  subtitle?: string,
  iconUrl?: string,
}

export function Heading({ title, subtitle, iconUrl }: HeadingPropsType) {
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
