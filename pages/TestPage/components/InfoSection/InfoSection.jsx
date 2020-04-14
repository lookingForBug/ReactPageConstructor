import React from 'react'
import PropTypes from 'prop-types';
import InfoBlock from './components/InfoBlock/InfoBlock';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { WithMargin } from '../WithMargin/WithMargin';

export function InfoSection({ infoBlocks }) {
  const hasInfoBlocks = infoBlocks && !!infoBlocks.length;

  if (!hasInfoBlocks) return null;

  return (
    <ContentWrapper>
      {infoBlocks.map(
        (infoBlockProps, index) => (
          <WithMargin key={index} marginTop={index !== 0 ? { mobile: 50, desktop: 150 } : {}}>
            <InfoBlock
              isReversed={Boolean(index % 2)}
              {...infoBlockProps}
            />
          </WithMargin>
        )
      )}
    </ContentWrapper>
  );
};

InfoSection.propTypes = {
  infoBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      promoQuestions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ),
      imageUrl: PropTypes.string,
    }),
  ),
};

