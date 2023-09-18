import { styled } from 'styled-components/native'

export const Background = styled.Pressable(() => ({
  backgroundColor: 'rgba(0,0,0,.5)',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
}))

export const Container = styled.View((props) => ({
  borderRadius: props.theme.size.size6,
  backgroundColor: props.theme.palette.background.default,
  padding: props.theme.size.size6,
  width: '90%',
  gap: props.theme.size.size2,
}))

export const Header = styled.View((props) => ({
  flexDirection: 'row',
  gap: props.theme.size.size3,
  justifyContent: 'space-between',
}))

export const Row = styled.View((props) => ({
  gap: props.theme.size.size2,
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
}))

export const Title = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontFamily: props.theme.typography.family.primary.bold,
  fontSize: props.theme.typography.fontSize.size5,
  lineHeight: props.theme.size.size6,
  flex: 1,
}))

export const Content = styled.View((props) => ({
  gap: props.theme.size.size2,
}))
