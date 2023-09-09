import { FlatList, ImageProps, RefreshControl, View, ViewProps } from 'react-native'
import { router } from 'expo-router'

import ListItem from '@components/list_item'

type ItemType = {
  cover: ImageProps
  foreground: ImageProps
  id: number
  image: ImageProps
  title: string
  publisher: string
}

export interface Props extends ViewProps {
  data: Array<ItemType>
  // renderItem: (info: { item: ItemType }) => JSX.Element
}

const ListView = (props: Props): JSX.Element => {
  const { data, ...rest } = props

  return (
    <View>
      <FlatList
        refreshControl={
          //@ts-expect-error missing props
          <RefreshControl
          // pass loading
          // refreshing
          // onRefresh={onRefresh}
          />
        }
        data={data}
        renderItem={({ item }): JSX.Element => (
          <ListItem
            coverImage={item.cover}
            foregroundImage={item.foreground}
            publisher={item.publisher}
            title={item.title}
            onPress={(): void => router.push('/game_details/')}
          />
        )}
        {...rest}
      />
    </View>
  )
}

export default ListView
