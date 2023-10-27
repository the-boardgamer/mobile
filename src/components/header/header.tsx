import { type ViewProps } from 'react-native'

import * as Styled from './styles'

export interface HeaderProps extends ViewProps {
  children?: JSX.Element[] | JSX.Element
}

const Header = (props: HeaderProps): JSX.Element => {
  const { children, ...rest } = props

  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Header
