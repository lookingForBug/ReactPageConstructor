import React, { ReactNode } from 'react';

type paddingType = {
  mobile: number,
  desktop: number,
}

type WithPaddingType = {
  paddingTop?: paddingType,
  paddingBottom?: paddingType,
  paddingLeft?: paddingType,
  paddingRight?: paddingType,
  children: ReactNode,
} & typeof defaultProps;

const defaultProps = Object.freeze({
  paddingBottom: {
    mobile: 0,
    desktop: 0,
  },
  paddingTop: {
    mobile: 0,
    desktop: 0,
  },
  paddingLeft: {
    mobile: 0,
    desktop: 0,
  },
  paddingRight: {
    mobile: 0,
    desktop: 0,
  }
});

export function WithPadding({ children, paddingTop, paddingBottom, paddingLeft, paddingRight }: WithPaddingType) {
  return (
    <div className="paddingContainer">
      {children}
      <style jsx>
        {`
        .paddingContainer {
          padding-top: ${paddingTop.mobile || 0}px;
          padding-bottom: ${paddingBottom.mobile || 0}px;
          padding-left: ${paddingLeft.mobile || 0}px;
          padding-right: ${paddingRight.mobile || 0}px;
        }

        @media (min-width: 1024px) {
          .paddingContainer {
            padding-top: ${paddingTop.desktop || 0}px;
            padding-bottom: ${paddingBottom.desktop || 0}px;
            padding-left: ${paddingLeft.desktop || 0}px;
            padding-right: ${paddingRight.desktop || 0}px;
          }
        }
      `}
      </style>
    </div>
  )
};

WithPadding.defaultProps = defaultProps;
