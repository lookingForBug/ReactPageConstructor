import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { ContentWrapper } from 'commonComponents/ContentWrapper/ContentWrapper';
import { Comment, CommentPropsType } from './components/Comment/Comment';
import styles from './Comments.module.scss';

const cx = classNames.bind(styles);

type CommentsProps = {
  comments: CommentPropsType[],
  commentCountOnTurn: number,
} & typeof defaultProps;

const defaultProps = Object.freeze({ commentCountOnTurn: 3 });

export function Comments({ comments, commentCountOnTurn }: CommentsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNextClick = () => setActiveIndex(activeIndex + 1);
  const handlePrevClick = () => setActiveIndex(activeIndex - 1);

  return (
    <ContentWrapper>
      <div>
        <button
          onClick={handlePrevClick}
          disabled={!activeIndex}
        >
          prev
        </button>
        <button
          onClick={handleNextClick}
          disabled={activeIndex >= comments.length - (1 + commentCountOnTurn)}
        >
          next
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
    </ContentWrapper>
  );
};

Comments.defaultProps = defaultProps;