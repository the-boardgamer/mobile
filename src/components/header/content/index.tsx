import { type ViewProps } from 'react-native'

import * as Styled from './styles'

export interface ContentProps extends ViewProps {
  title?: string
  description?: string
  titleLines?: number
  descriptionLines?: number
}

const defaultValues: ContentProps = {
  titleLines: 2,
  descriptionLines: 2,
}

const Content = (props: ContentProps): JSX.Element => {
  const { title, description, titleLines, descriptionLines, ...rest } = {
    ...defaultValues,
    ...props,
  }

  const hasTitle = !!title && title !== ''
  const hasDescription = !!description && description !== ''

  return (
    <Styled.Container {...rest}>
      {hasTitle && <Styled.Title numberOfLines={titleLines}>{title}</Styled.Title>}
      {hasDescription && (
        <Styled.Description numberOfLines={descriptionLines}>{description}</Styled.Description>
      )}
    </Styled.Container>
  )
}

export default Content
