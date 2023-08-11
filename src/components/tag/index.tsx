import { ViewProps } from 'react-native'

import * as Styled from './styles'

export interface Props extends ViewProps {
  label?: string
}

export default function Tag(props: Props): JSX.Element {
  const { label, ...rest } = { ...props }

  return (
    <Styled.Container {...rest}>{label && <Styled.Label>{label}</Styled.Label>}</Styled.Container>
  )
}
