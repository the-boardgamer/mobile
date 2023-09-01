import { Image, ImageProps, Pressable } from 'react-native'

import * as Styled from './styles'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props {
  image: ImageProps
}

export default function GridItem(props: Props): JSX.Element {
  const { image, ...rest } = { ...props }

  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  const img = Image.resolveAssetSource(image)
  const aspectRatio = img.width / img.height

  if (!aspectRatio) return

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Styled.Image
        source={image}
        resizeMode="contain"
        style={{ aspectRatio: aspectRatio || 1, transform: [{ scale: animatedScale }] }}
      />
    </Pressable>
  )
}
