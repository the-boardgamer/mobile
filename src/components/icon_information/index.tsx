import { TouchableOpacityProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/icon'
import { useTheme } from '@contexts'

export interface Props extends TouchableOpacityProps {
  data?: string
  label?: string
  icon?: JSX.Element
}

export default function IconInformation(props: Props): JSX.Element {
  const { data, label, icon, onPress, ...rest } = props

  const { theme } = useTheme()

  return (
    <Styled.Container
      {...rest}
      onPress={onPress}
      activeOpacity={!onPress && 1}
    >
      <Styled.IconContainer>
        <Icon
          icon={icon}
          width={theme.size.size9}
          height={theme.size.size9}
          color={theme.palette.foreground.default}
        />
      </Styled.IconContainer>
      <Styled.TextContent>
        <Styled.Data numberOfLines={1}>
          {data}
          <Styled.Label>{label}</Styled.Label>
        </Styled.Data>
      </Styled.TextContent>
    </Styled.Container>
  )
}
