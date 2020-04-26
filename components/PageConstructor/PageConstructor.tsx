import React, { memo, ComponentType } from "react";

type structureBlock = {
  id: string,
}

type PageConstructorPropType = {
  components: {
    [key: string]: ComponentType
  },
  model: {
    structure: structureBlock[],
    blocks: {
      [key: string]: {
        component: string,
        props: object,
      }
    }
  },
}

const PageConstructor = ({ components, model }: PageConstructorPropType) => {
  const { structure } = model || {};
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
          const PageComponent = components[elementData.component];

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
