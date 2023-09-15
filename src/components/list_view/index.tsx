import { FlatList, RefreshControl, View, ViewProps } from 'react-native'
import { router } from 'expo-router'

import ListItem from '@components/list_item'

export type InformationType = {
  data: string
  label: string
  key: string
}

export type ItemType = {
  cover: string
  description: string
  foreground: string
  id: number
  image: string
  information: InformationType[]
  publisher: string
  tags: string[]
  title: string
}

export interface Props extends ViewProps {
  data: Array<ItemType>
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
        )}
        {...rest}
      />
    </View>
  )
}

export default ListView
