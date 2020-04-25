import React from 'react';
import classNames from 'classnames/bind';

import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

export type CommentPropsType = {
  text: string,
  name: string,
  avatarUrl?: string,
} & typeof defaultProps;

const defaultProps = Object.freeze({ text: 'Lorem Ipsum dolor blah blah blah', name: "Anonymous" })

export function Comment({ text, name, avatarUrl }: CommentPropsType) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('comment')}>{text}</p>
      <div className={cx('info')}>
        {avatarUrl && <img className={cx('avatar')} src={avatarUrl} alt="avatar" />}
        <p className={cx('name')}>{name}</p>
      </div>
    </div>
  );
};

Comment.defaultProps = defaultProps;