import React from 'react'
import { Animated, LayoutAnimation, Platform, UIManager, ViewProps } from 'react-native'

import { itemAnimation } from './item_animation'
import * as Styled from './styles'
import Button from '@components/button'
import { IconArrow } from '@components/icon'
import { useTheme } from '@contexts'

export interface AccordionItemProps extends ViewProps {
  content: string
  label: string
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function AccordionItem(props: AccordionItemProps): JSX.Element {
  const { label, content, ...rest } = { ...props }
  const { theme } = useTheme()

  const [open, setOpen] = React.useState(false)
  const collapseValue = React.useRef(new Animated.Value(open ? 1 : 0)).current

  function handleOnPress(): void {
    Animated.timing(collapseValue, {
      duration: 300,
      toValue: open ? 0 : 1,
      useNativeDriver: true,
    }).start()
    LayoutAnimation.configureNext(itemAnimation())
    setOpen((prev) => !prev)
  }

  const interpolatedRotation = collapseValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['270deg', '90deg'],
  })

  return (
    <Styled.AccordionItemContainer {...rest}>
      <Styled.TitleContainer onPress={handleOnPress}>
        <Styled.DescriptionTitle>{label}</Styled.DescriptionTitle>
        <Button
          action
          animation={false}
          color="background"
          variant="outlined"
          onPress={handleOnPress}
          icon={
            <Animated.View
              style={{
                transform: [
                  {
                    rotate: interpolatedRotation,
                  },
                ],
              }}
            >
              <IconArrow color={theme.palette.foreground.default} />
            </Animated.View>
          }
        />
      </Styled.TitleContainer>
      {open && <Styled.DescriptionContent>{content}</Styled.DescriptionContent>}
    </Styled.AccordionItemContainer>
  )
}
