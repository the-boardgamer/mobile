import { RefreshControl, ScrollViewProps, useWindowDimensions } from 'react-native'
import { router } from 'expo-router'

import * as Styled from './styles'
import GridItem from '@components/grid_item'
import { ItemType } from '@components/list_view'

export interface Props extends ScrollViewProps {
  data: Array<ItemType>
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
              .map((item) => (
                <GridItem
                  image={item.image}
                  key={item.id}
                  onPress={(): void =>
                    router.push({
                      pathname: `/game_details/`,
                      params: {
                        cover: item.cover,
                        description: item.description,
                        foreground: item.foreground,
                        information: JSON.stringify(item.information),
                        tags: JSON.stringify(item.tags),
                      },
                    })
                  }
                />
              ))}
          </Styled.Column>
        ))}
      </Styled.Container>
    </Styled.Scroll>
  )
}

export default MasonryView
