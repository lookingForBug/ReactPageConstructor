import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InfoBlock.module.scss';

const cx = classNames.bind(styles)

function InfoBlock({ title, description, promoQuestions, imageUrl, isReversed }) {
  const hasPromoQuestions = promoQuestions && !!promoQuestions.length;

  return (
    <div className={cx('wrapper', { reversed: isReversed })}>
      <div className={cx('textContent')}>
        <h3 className={cx('title')}>{title}</h3>
        <p className={cx('description')}>{description}</p>
        {hasPromoQuestions &&
          promoQuestions.map(
            ({ text: promoText }, index) => (
              <div key={index} className={cx('promotextWrapper')}>
                <p className={cx('promotext')}>{promoText}</p>
              </div>
            )
          )
        }
      </div>
      {imageUrl && (
        <div className={cx('imageContent')}>
          <img className={cx('image')} src={imageUrl} />
        </div>
      )}
    </div>
  )
};

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  promoQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    }),
  ),
  imageUrl: PropTypes.string,
  isReversed: PropTypes.bool,
};

export default InfoBlock;

