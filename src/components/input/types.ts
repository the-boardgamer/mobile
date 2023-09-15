import { TextInputProps } from 'react-native'

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
