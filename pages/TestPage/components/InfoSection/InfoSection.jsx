import React from 'react'
import PropTypes from 'prop-types';
import InfoBlock from './components/InfoBlock/InfoBlock';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export function InfoSection({ infoBlocks }) {
  const hasInfoBlocks = infoBlocks && !!infoBlocks.length;

  if (!hasInfoBlocks) return null;

  return (
    <ContentWrapper>
      {infoBlocks.map(
        (infoBlockProps, index) => (
          <InfoBlock
            key={index}
            isReversed={Boolean(index % 2)}
            {...infoBlockProps}
          />
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

