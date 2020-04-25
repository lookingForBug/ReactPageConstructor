import React from 'react'
import { InfoBlock, InfoBlockPropsType } from './components/InfoBlock/InfoBlock';
import { ContentWrapper } from 'commonComponents/ContentWrapper/ContentWrapper';
import { WithMargin } from 'commonComponents/WithMargin/WithMargin';

type InfoSectionType = {
  infoBlocks: InfoBlockPropsType[],
}

export function InfoSection({ infoBlocks }: InfoSectionType) {
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
