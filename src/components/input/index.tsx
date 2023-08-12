import { TextInputProps } from 'react-native'

import CollapsibleInput from './collapsible'
import StandardInput from './standard'

export interface Props extends TextInputProps {
  collapsible?: boolean
  icon?: JSX.Element
  onChange?: (value) => void
  outlined?: boolean
  placeholder?: string
}

export const defaultValues: Props = {
  collapsible: false,
  outlined: false,
}

export default function Input(props: Props): JSX.Element {
  const { collapsible, ...rest } = { ...defaultValues, ...props }

  if (collapsible) return <CollapsibleInput {...rest} />
  return <StandardInput {...rest} />
}
