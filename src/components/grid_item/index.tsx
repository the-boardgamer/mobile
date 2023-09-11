import { Image, ImageSourcePropType, Pressable, PressableProps } from 'react-native'

import * as Styled from './styles'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props extends PressableProps {
  image: string
}

export default function GridItem(props: Props): JSX.Element {
  const { image, ...rest } = { ...props }

  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  const img = Image.resolveAssetSource(image as ImageSourcePropType)
  const aspectRatio = img.width / img.height

  if (!aspectRatio) return

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Styled.Image
        source={image as ImageSourcePropType}
        resizeMode="contain"
        style={{ aspectRatio: aspectRatio || 1, transform: [{ scale: animatedScale }] }}
      />
    </Pressable>
  )
}
