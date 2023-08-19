import { Image, ImageProps, TouchableOpacity } from 'react-native'

import * as Styled from './styles'

export interface Props {
  image: ImageProps
}

export default function GridItem(props: Props): JSX.Element {
  const { image, ...rest } = { ...props }

  const img = Image.resolveAssetSource(image)
  const aspectRatio = img.width / img.height

  if (!aspectRatio) return

  return (
    <TouchableOpacity {...rest}>
      <Styled.Image
        source={image}
        resizeMode="contain"
        style={{ aspectRatio: aspectRatio || 1 }}
      />
    </TouchableOpacity>
  )
}
