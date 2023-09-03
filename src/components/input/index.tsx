import { TextInputProps } from 'react-native'

import CollapsibleInput from './collapsible'
import StandardInput from './standard'
import { defaultValues } from './utils'

export interface Props extends TextInputProps {
  collapsible?: boolean
  icon?: JSX.Element
  onChange?: (value) => void
  outlined?: boolean
  placeholder?: string
}

export default function Input(props: Props): JSX.Element {
  const { collapsible, ...rest } = { ...defaultValues, ...props }

  if (collapsible) return <CollapsibleInput {...rest} />
  return <StandardInput {...rest} />
}
