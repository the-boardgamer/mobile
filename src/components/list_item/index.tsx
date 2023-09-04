import { Animated, Image, ImageProps, PressableProps } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@contexts'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props extends PressableProps {
  coverImage: ImageProps
  foregroundImage: ImageProps
  icon?: JSX.Element
  publisher: string
  title: string
}

export default function ListItem(props: Props): JSX.Element {
  const { icon, coverImage, foregroundImage, publisher, title, ...rest } = { ...props }
  const { theme } = useTheme()

  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  return (
    <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
      <Styled.Button
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...rest}
      >
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
            numberOfLines={2}
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
      </Styled.Button>
    </Animated.View>
  )
}
