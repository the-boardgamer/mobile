import React from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  ListRenderItemInfo,
  ScrollView,
  View,
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import * as Styled from './styles'
import Button from '@components/button'
import {
  IconAge,
  IconArrow,
  IconDowntime,
  IconMeeple,
  IconSetup,
  IconStar,
  IconTime,
} from '@components/icon'
import IconInformation from '@components/icon_information'
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

  function renderIcon(key: string): JSX.Element {
    switch (key) {
      case 'age':
        return <IconAge />
      case 'time':
        return <IconTime />
      case 'downtime':
        return <IconDowntime />
      case 'setup':
        return <IconSetup />
      default:
        return <IconMeeple />
    }
  }

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
              data={JSON.parse(information)}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({ item }: ListRenderItemInfo<InformationType>): JSX.Element => (
                <IconInformation
                  label={item.label}
                  data={item.data}
                  icon={renderIcon(item.key)}
                  onPress={(): void => undefined}
                  // change later when margins on component
                  style={{ marginBottom: 10, marginRight: 6 }}
                />
              )}
            />
          )}

          {description && (
            <Styled.DescriptionContainer>
              <Styled.DescriptionTitle>Description</Styled.DescriptionTitle>
              <Styled.DescriptionContent>{description}</Styled.DescriptionContent>
            </Styled.DescriptionContainer>
          )}
        </View>
      </ScrollView>
    </Global.Screen>
  )
}
