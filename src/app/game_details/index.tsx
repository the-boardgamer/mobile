import React from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  ListRenderItemInfo,
  ScrollView,
  View,
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import GameInfoModal from './game_info_modal'
import * as Styled from './styles'
import Accordion from '@components/accordion'
import Button from '@components/button'
import { IconArrow, IconStar } from '@components/icon'
import { InformationType } from '@components/list_view'
import Tag from '@components/tag'
import Global from '@styles'

export default function GameDetails(): JSX.Element {
  const [filled, setFilled] = React.useState(false)

  const { cover, description, foreground, information, tags } = useLocalSearchParams<{
    cover: string
    description: string
    foreground: string
    information: string
    tags: string
  }>()

  return (
    <Global.Screen edges={['left', 'right']}>
      <ScrollView>
        <ImageBackground
          source={cover as ImageSourcePropType}
          blurRadius={4}
          imageStyle={{ opacity: 0.7 }}
          style={{ height: 300 }}
        >
          {/* check later */}
          <Styled.HeaderContainer>
            <Button
              color="background"
              icon={<IconArrow />}
              onPress={(): void => router.back()}
              animation={false}
            />
            <Button
              color="background"
              icon={<IconStar filled={filled} />}
              onPress={(): void => setFilled((prev) => !prev)}
            />
          </Styled.HeaderContainer>
          <Styled.ImageContainer>
            <Styled.CoverImage source={foreground as ImageSourcePropType} />
          </Styled.ImageContainer>
        </ImageBackground>
        <View>
          {JSON.parse(tags) && (
            <Styled.TagsContainer
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              {JSON.parse(tags).map((label, i) => (
                <Tag
                  key={`${label}-${i}`}
                  label={label}
                  // change later when margins on component
                  style={{ marginRight: 8 }}
                />
              ))}
            </Styled.TagsContainer>
          )}

          {JSON.parse(information) && (
            <Styled.IconInformationList
              numColumns={5}
              ItemSeparatorComponent={Global.Separator}
              data={JSON.parse(information)}
              scrollEnabled={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item }: ListRenderItemInfo<InformationType>): JSX.Element => (
                <GameInfoModal
                  label={item.label}
                  data={item.data}
                  id={item.key}
                />
              )}
            />
          )}
          {description && (
            <View>
              <Accordion
                data={[
                  { label: 'Description', content: description },
                  {
                    label: 'Test 2',
                    content: description,
                  },
                  { label: 'Test', content: description },
                ]}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Global.Screen>
  )
}
