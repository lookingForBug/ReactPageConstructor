import React, { memo } from "react";

const PageConstructor = ({ components, model = {} }) => {
  const { structure } = model;
  const hasPageStructure = structure && !!structure.length;

  if (!hasPageStructure) {
    return null;
  }

  return (
    <div>
      {structure.map(
        pageElement => {
          const { blocks } = model;
          const elementData = blocks[pageElement.id];
          const PageComponent = components[elementData && elementData.component];

          if (!PageComponent) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('no such component in scheme!', pageElement);
            }
            return null;
          }

          return <PageComponent key={pageElement.id} {...elementData.props} />;
        }
      )}
    </div>
  )
}

export default memo(PageConstructor);
