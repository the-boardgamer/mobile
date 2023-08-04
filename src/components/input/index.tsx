import React from 'react'
import { Animated, TextInputProps } from 'react-native'
import { Dimensions } from 'react-native'
import { useTheme } from 'styled-components'

import * as Styled from './styles'

export interface Props extends TextInputProps {
  placeholder?: string
  outlined?: boolean
  icon?: JSX.Element
  onChange?: (value) => void
}

const defaultValues: Props = {
  outlined: false,
}

export default function Input(props: Props): JSX.Element {
  const { onChange, outlined, icon, placeholder, ...rest } = { ...defaultValues, ...props }

  const theme = useTheme()

  const screenWidth = Dimensions.get('window').width

  const [showInput, setShowInput] = React.useState(false)
  const [animatedWidth] = React.useState(new Animated.Value(24))

  const setAnimation = (): void => {
    setShowInput(!showInput)
    const targetWidth = showInput ? 24 : screenWidth - 105

    Animated.timing(animatedWidth, {
      toValue: targetWidth,
      duration: 900,
      useNativeDriver: false,
    }).start()
  }

  return (
    <Styled.Container
      outlined={outlined}
      showInput={showInput}
      {...rest}
    >
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Animated.View style={{ width: animatedWidth, flexDirection: 'row', alignItems: 'flex-end' }}>
        {showInput && (
          <Styled.Input
            placeholder={placeholder}
            theme={theme}
            placeholderTextColor={'#FFFF'}
            onChangeText={(value): void => onChange(value)}
          />
        )}
      </Animated.View>
      <Styled.IconContainer
        onPress={setAnimation}
        showInput={showInput}
      >
        <Styled.Icon
          icon={icon}
          theme={theme}
        />
      </Styled.IconContainer>
    </Styled.Container>
  )
}
