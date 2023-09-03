import { styled } from 'styled-components/native'

export const Container = styled.View(() => ({
  flexDirection: 'row',
  paddingHorizontal: '16px',
}))

export const Column = styled.View((props) => ({
  flex: 1,
  margin: props.theme.size.size1,
}))

export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    width: '100%',
  },
}))``
