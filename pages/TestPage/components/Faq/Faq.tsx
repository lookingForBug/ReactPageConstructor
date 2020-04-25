import React from 'react';
import classNames from 'classnames/bind';
// common components
import { ContentWrapper } from 'commonComponents/ContentWrapper/ContentWrapper';
import { WithMargin } from 'commonComponents/WithMargin/WithMargin';
// components
import { Heading, HeadingPropsType } from './components/Heading/Heading';
import { FaqBlock, FaqBlockPropsType } from './components/FaqBlock/FaqBlock';

import styles from './Faq.module.scss';

const cx = classNames.bind(styles);

type FaqPropsType = {
  items: FaqBlockPropsType[],
} & HeadingPropsType;

function chunkArray(
  myArray: FaqBlockPropsType[],
  chunk: number): FaqBlockPropsType[][] {
  return [[...myArray.slice(0, chunk)], [...myArray.slice(chunk, chunk + myArray.length)]]
}

export function Faq({ items, ...headingProps }: FaqPropsType) {
  if (items.length === 0) {
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
