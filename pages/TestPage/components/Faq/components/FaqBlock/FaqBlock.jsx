import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FaqBlock.module.scss';

const cx = classNames.bind(styles);

export function FaqBlock({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('questionWrapper')} onClick={() => setIsOpen(!isOpen)}>
        <div>
          {question}
        </div>
        <div className={cx('icon', { isOpen })} />
      </div>
      {isOpen && (
        <div className={cx('answerWrapper')}>
          {answer}
        </div>)
      }
    </div>
  )
};

FaqBlock.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

