import { useWindowDimensions } from 'react-native';
import RenderHtml, {
  MixedStyleDeclaration,
  RenderHTMLProps,
} from 'react-native-render-html';
import React from 'react';

const HTMLRenderer = ({ source, baseStyle, ...rest }: RenderHTMLProps) => {
  const { width } = useWindowDimensions();

  return (
    <RenderHtml
      {...rest}
      contentWidth={width}
      source={source}
      baseStyle={baseStyle}
      enableExperimentalGhostLinesPrevention={true}
      enableExperimentalBRCollapsing={true}
      enableExperimentalMarginCollapsing={true}
    />
  );
};

export default HTMLRenderer;
