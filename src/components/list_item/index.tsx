import React from 'react'
import { Image, ImageProps, PressableProps } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@contexts'

export interface Props extends PressableProps {
  coverImage: ImageProps
  foregroundImage: ImageProps
  icon?: JSX.Element
  publisher: string
  title: string
}

export default function ListItem(props: Props): JSX.Element {
  const { icon, coverImage, foregroundImage, publisher, title } = { ...props }

  const [lines, setLines] = React.useState()

  const { theme } = useTheme()

  const handleTextLayout = (event): void => {
    setLines(event.nativeEvent.lines.length)
  }

  return (
    <Styled.Container>
      <Styled.StartContainer>
        <Styled.CoverImage
          source={coverImage}
          resizeMode="cover"
          blurRadius={4}
        />
        <Styled.ForegroundImage>
          <Image source={foregroundImage} />
        </Styled.ForegroundImage>
      </Styled.StartContainer>
      <Styled.EndContainer>
        <Styled.Title
          onTextLayout={handleTextLayout}
          numberOfLines={2}
          lines={lines}
          ellipsizeMode="tail"
        >
          {title}
        </Styled.Title>
        <Styled.PublisherContainer>
          {icon && (
            <Styled.Icon
              icon={icon}
              theme={theme}
            />
          )}
          <Styled.PublisherName
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {publisher}
          </Styled.PublisherName>
        </Styled.PublisherContainer>
      </Styled.EndContainer>
    </Styled.Container>
  )
}
