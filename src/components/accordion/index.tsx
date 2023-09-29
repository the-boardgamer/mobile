import React from 'react'
import { ViewProps } from 'react-native'

import AccordionItem, { AccordionItemProps } from './accordion_item'

export interface Props extends ViewProps {
  data: AccordionItemProps[]
}

export default function Accordion(props: Props): JSX.Element {
  const { data, ...rest } = { ...props }

  return (
    <React.Fragment {...rest}>
      {data.map((item, i) => (
        <AccordionItem
          key={`${item.label}-${i}`}
          content={item.content}
          label={item.label}
        />
      ))}
    </React.Fragment>
  )
}
