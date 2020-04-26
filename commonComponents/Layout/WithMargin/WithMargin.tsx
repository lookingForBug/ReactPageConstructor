import React, { ReactNode } from 'react';

type marginType = {
  mobile?: number,
  desktop?: number,
}

type WithMarginType = {
  marginTop?: marginType,
  marginBottom?: marginType,
  marginLeft?: marginType,
  marginRight?: marginType,
  children: ReactNode,
} & typeof defaultProps;

const defaultProps = Object.freeze({
  marginBottom: {
    mobile: 0,
    desktop: 0,
  },
  marginTop: {
    mobile: 0,
    desktop: 0,
  },
  marginRight: {
    mobile: 0,
    desktop: 0,
  },
  marginLeft: {
    mobile: 0,
    desktop: 0,
  }
});

export function WithMargin({ children, marginTop, marginBottom, marginLeft, marginRight }: WithMarginType) {
  return (
    <div className="marginContainer">
      {children}
      <style jsx>
        {`
        .marginContainer {
          margin-top: ${marginTop.mobile || 0}px;
          margin-bottom: ${marginBottom.mobile || 0}px;
          margin-left: ${marginLeft.mobile || 0}px;
          margin-right: ${marginRight.mobile || 0}px;
        }

        @media (min-width: 1024px) {
          .marginContainer {
            margin-top: ${marginTop.desktop || 0}px;
            margin-bottom: ${marginBottom.desktop || 0}px;
            margin-left: ${marginLeft.desktop || 0}px;
            margin-right: ${marginRight.desktop || 0}px;
          }
        }
      `}
      </style>
    </div>
  )
};

WithMargin.defaultProps = defaultProps;
