import React from 'react'
import { Animated } from 'react-native'

export function useShrinkAnimation(
  initialScale = 1,
  toValue = 0.98,
  speed = 10,
): {
  animatedScale: Animated.Value
  handlePressIn: () => void
  handlePressOut: () => void
} {
  const animatedScale = React.useRef(new Animated.Value(initialScale)).current

  const handlePressIn = (): void => {
    Animated.spring(animatedScale, {
      toValue: toValue,
      speed: speed,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = (): void => {
    Animated.spring(animatedScale, {
      toValue: initialScale,
      speed: speed,
      useNativeDriver: true,
    }).start()
  }

  return {
    animatedScale,
    handlePressIn,
    handlePressOut,
  }
}
