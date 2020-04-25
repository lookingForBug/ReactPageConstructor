import React from 'react';
import PropTypes from 'prop-types';

export function WithMargin({ children, marginTop = {}, marginBottom = {} }) {
  return (
    <div>
      {children}
      <style jsx>
        {`
        div {
          margin-top: ${marginTop.mobile || 0}px;
          margin-bottom: ${marginBottom.mobile || 0}px;

        }

        @media (min-width: 1024px) {
          div {
            margin-top: ${marginTop.desktop || 0}px;
            margin-bottom: ${marginBottom.desktop || 0}px;
          }
        }
      `}
      </style>
    </div>
  )
};

WithMargin.propTypes = {
  marginTop: PropTypes.shape({
    mobile: PropTypes.number,
    desktop: PropTypes.number,
  }),
  marginBottom: PropTypes.shape({
    mobile: PropTypes.number,
    desktop: PropTypes.number,
  })
};
