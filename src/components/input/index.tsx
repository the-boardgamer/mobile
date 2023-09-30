import { Animated, TextInputProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/icon'
import { useTheme } from '@contexts'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props extends TextInputProps {
  icon?: JSX.Element
  handleIconPress?: () => void
}

export default function Input(props: Props): JSX.Element {
  const { icon, handleIconPress, ...rest } = {
    ...props,
  }
  const { theme } = useTheme()
  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  const getTrailingContent = (): JSX.Element => {
    if (handleIconPress && icon)
      return (
        <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
          <Styled.ActionButtonContainer
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Icon
              width={18}
              height={18}
              icon={icon}
              color={theme.palette.foreground.variant}
            />
          </Styled.ActionButtonContainer>
        </Animated.View>
      )
    else if (icon)
      return (
        <Styled.IconContainer>
          <Icon
            width={18}
            height={18}
            icon={icon}
            color={theme.palette.foreground.variant}
          />
        </Styled.IconContainer>
      )
  }

  return (
    <Styled.Container>
      <Styled.TextInput
        selectionColor={theme.palette.foreground.variant}
        cursorColor={theme.palette.foreground.variant}
        placeholderTextColor={theme.palette.foreground.shade30}
        {...rest}
      />
      {getTrailingContent()}
    </Styled.Container>
  )
}
