import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { ContentWrapper, WithMargin } from 'commonComponents/Layout';

import { Comment, CommentPropsType } from './components/Comment/Comment';
import ArrowIcon from './assets/arrow.svg';
import styles from './Comments.module.scss';

const cx = classNames.bind(styles);

type CommentsProps = {
  comments: CommentPropsType[],
  commentCountOnTurn: number,
  title: string,
  subtitle?: string,
} & typeof defaultProps;

const defaultProps = Object.freeze({ commentCountOnTurn: 3 });

export function Comments({ comments, commentCountOnTurn, title, subtitle }: CommentsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNextClick = () => setActiveIndex(activeIndex + 1);
  const handlePrevClick = () => setActiveIndex(activeIndex - 1);

  return (
    <ContentWrapper>
      <div className={cx('wrapper')}>
        <div className={cx('heading')}>
          <h2 className={cx('title')}>{title}</h2>
          {subtitle && (
            <WithMargin marginTop={{ mobile: 20, desktop: 40 }}>
              <p className={cx('subtitle')}>{subtitle}</p>
            </WithMargin>
          )}
        </div>
        <WithMargin marginLeft={{ mobile: 0, desktop: 80 }}>
          <div className={cx('btnWrapper')}>
            <button
              className={cx('btn', 'prev')}
              onClick={handlePrevClick}
              disabled={!activeIndex}
            >
              <ArrowIcon />
            </button>
            <button
              className={cx('btn', 'next')}
              onClick={handleNextClick}
              disabled={activeIndex >= comments.length - (1 + commentCountOnTurn)}
            >
              <ArrowIcon />
            </button>
          </div>
          <div className={cx('commentsWrapper')}>
            {comments.map(
              (comment, i) => {
                if (i < activeIndex || i > activeIndex + commentCountOnTurn - 1) return;

                return (
                  <div key={i} className={cx('commentWrapper')}>
                    <Comment {...comment} />
                  </div>
                );
              },
            )}
          </div>
        </WithMargin>
      </div>
    </ContentWrapper>
  );
};

Comments.defaultProps = defaultProps;