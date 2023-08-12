import { defaultValues, Props } from '.'
import * as Styled from './styles'
import { useTheme } from '@contexts'

export default function StandardInput(props: Props): JSX.Element {
  const { onChange, outlined, icon, placeholder, ...rest } = { ...defaultValues, ...props }

  const { theme } = useTheme()

  return (
    <Styled.Container
      outlined={outlined}
      showInput={true}
      {...rest}
    >
      <Styled.Input
        placeholder={placeholder}
        theme={theme}
        placeholderTextColor={theme.palette.foreground.shade30}
        onChangeText={(value): void => onChange(value)}
      />
      {icon && (
        <Styled.IconContainer showInput={true}>
          <Styled.Icon
            icon={icon}
            theme={theme}
          />
        </Styled.IconContainer>
      )}
    </Styled.Container>
  )
}
