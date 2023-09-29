import { type ViewProps } from 'react-native'

import * as Styled from './styles'
import Button from '@components/button'
import { IconX } from '@components/icon'

export interface Header extends ViewProps {
  closeButton: boolean
  handleClose: () => void
}

const defaultValues = {
  closeButton: false,
}

const Header = (props: Header): JSX.Element => {
  const { children, closeButton, handleClose, ...rest } = { ...defaultValues, ...props }

  return (
    <Styled.Header {...rest}>
      {children}
      {closeButton && (
        <Button
          action
          onPress={handleClose}
          icon={<IconX />}
          color="background"
        />
      )}
    </Styled.Header>
  )
}

export default Header
