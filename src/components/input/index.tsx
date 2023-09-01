import CollapsibleInput from './collapsible'
import StandardInput from './standard'
import { defaultValues, Props } from './types'

export default function Input(props: Props): JSX.Element {
  const { collapsible, ...rest } = { ...defaultValues, ...props }

  if (collapsible) return <CollapsibleInput {...rest} />
  return <StandardInput {...rest} />
}
