import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// common components
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { WithMargin } from '../WithMargin/WithMargin';
// components
import { Heading } from './components/Heading/Heading';
import { FaqBlock } from './components/FaqBlock/FaqBlock';

import styles from './Faq.module.scss';

const cx = classNames.bind(styles);

function chunkArray(myArray, chunk) {
  return [[...myArray.slice(0, chunk)], [...myArray.slice(chunk, chunk + myArray.length)]]
}

export function Faq({ items, ...headingProps }) {
  if (!items && items.length === 0) {
    return
  };

  const [chunkOne, chunkTwo] = chunkArray(items, Math.round(items.length / 2))

  return (
    <ContentWrapper>
      <Heading {...headingProps} />
      <div className={cx('wrapper')}>
        {chunkOne && !!chunkOne.length &&
          <div className={cx('column')}>
            {chunkOne.map((faqBlockProps, i) => (
              <WithMargin marginTop={i !== 0 ? { mobile: 10, desktop: 10 } : {}} key={i}>
                <FaqBlock {...faqBlockProps} />
              </WithMargin>
            ))}
          </div>
        }
        {chunkTwo && !!chunkTwo.length &&
          <div className={cx('column')}>
            {chunkTwo.map((faqBlockProps, i) => (
              <WithMargin marginTop={i !== 0 ? { mobile: 10, desktop: 10 } : {}} key={i}>
                <FaqBlock {...faqBlockProps} />
              </WithMargin>
            ))}
          </div>
        }
      </div>
    </ContentWrapper>
  );
};

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  iconUrl: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    }),
  ),
};


