import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

const paddingsForSize = (applyTopBottomPaddings, small, large) => {
  let paddingLeftRight = 0;
  let paddingTopBottom = 0;

  if (small) {
    paddingLeftRight = 10;
    paddingTopBottom = applyTopBottomPaddings ? 10 : 0;
  }

  if (large) {
    paddingLeftRight = 20;
    paddingTopBottom = applyTopBottomPaddings ? 20 : 0;
  }
  return {
    paddingLeft: paddingLeftRight,
    paddingRight: paddingLeftRight,
    paddingTop: paddingTopBottom,
    paddingBottom: paddingTopBottom,
  }
}

const Button = ({
  title,
  onPress,
  small,
  large,
  backgroundColor,
  applyTopBottomPaddings,
}) => (
    <TouchableOpacity
      style={{
        backgroundColor,
        ...paddingsForSize(applyTopBottomPaddings, small, large),
      }}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )

export default Button;