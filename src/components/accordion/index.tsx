import { ViewProps } from 'react-native'

import AccordionItem, { AccordionItemProps } from './accordion_item'
import * as Styled from './styles'

export interface Props extends ViewProps {
  data?: AccordionItemProps[]
}

export default function Accordion(props: Props): JSX.Element {
  const { data, ...rest } = { ...props }

  return (
    <Styled.AccordionContainer {...rest}>
      {data.map((item, i) => (
        <AccordionItem
          key={`${item.label}-${i}`}
          content={item.content}
          label={item.label}
        />
      ))}
    </Styled.AccordionContainer>
  )
}
