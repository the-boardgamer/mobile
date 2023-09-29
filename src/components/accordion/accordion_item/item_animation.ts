import { LayoutAnimation, LayoutAnimationConfig } from 'react-native'

export const itemAnimation = (animationDuration = 300): LayoutAnimationConfig => ({
  duration: animationDuration,
  update: {
    duration: animationDuration,
    property: LayoutAnimation.Properties.scaleXY,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: animationDuration,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
})
