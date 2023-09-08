import { ImageProps, RefreshControl, ScrollViewProps, useWindowDimensions } from 'react-native'

import * as Styled from './styles'
import GridItem from '@components/grid_item'

export interface Props extends ScrollViewProps {
  data: Array<{
    image: ImageProps
    id: number
  }>
}

const MasonryView = (props: Props): JSX.Element => {
  const { data, ...rest } = props

  const width = useWindowDimensions().width

  const numColumns = Math.ceil(width / 350)

  return (
    <Styled.Scroll
      refreshControl={
        //@ts-expect-error missing props
        <RefreshControl
        // pass loading
        // refreshing
        // onRefresh={onRefresh}
        />
      }
      {...rest}
    >
      <Styled.Container>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <Styled.Column key={`column_${colIndex}`}>
            {data
              .filter((_, index) => index % numColumns === colIndex)
              .map((game) => (
                <GridItem
                  image={game.image}
                  key={game.id}
                />
              ))}
          </Styled.Column>
        ))}
      </Styled.Container>
    </Styled.Scroll>
  )
}

export default MasonryView
