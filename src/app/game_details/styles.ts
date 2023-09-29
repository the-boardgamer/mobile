import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

import Header from '@components/header'

export const StartContainer = styled.View(() => ({
  height: '300px',
  position: 'relative',
}))

export const ForegroundImage = styled.View(() => ({
  alignItems: 'center',
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
}))

export const ImageContainer = styled.View(() => ({
  alignItems: 'center',
  flex: '1',
  justifyContent: 'center',
  paddingBottom: '30px',
  paddingTop: '10px',
}))

export const IconInformationList = styled.FlatList((props) => ({
  margin: props.theme.size.size5,
}))

export const CoverImage = styled.Image(() => ({
  height: '100%',
  maxWidth: '80%',
  resizeMode: 'contain',
  width: '100%',
}))

export const TagsContainer = styled.ScrollView((props) => ({
  paddingLeft: props.theme.size.size5,
  paddingTop: props.theme.size.size3,
}))

export const HeaderContainer = styled(Header.Root)(() => {
  const insets = useSafeAreaInsets()
  return {
    marginTop: `${insets.top}px`,
    zIndex: 1,
  }
})

export const GameInfoModalText = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontFamily: props.theme.typography.family.primary.medium,
}))

export const GameInfoModalTextHighlight = styled.Text((props) => ({
  color: props.theme.palette.primary.default,
  fontFamily: props.theme.typography.family.primary.bold,
}))
