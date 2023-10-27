import { styled } from 'styled-components/native'

import { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet'

export const Container = styled.Pressable((props) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
  marginHorizontal: props.theme.size.size5,
}))

export const LogoContainer = styled.View(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
}))

export const Content = styled.View((props) => ({
  gap: props.theme.size.size5,
  width: '100%',
  flex: 1,
}))

export const Title = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontSize: props.theme.typography.fontSize.size8,
  fontFamily: props.theme.typography.family.primary.bold,
}))

export const TitleContainer = styled.View((props) => ({
  gap: props.theme.size.size3,
}))

export const SheetContent = styled.View((props) => ({
  gap: props.theme.size.size4,
}))

export const SheetTitle = styled.Text((props) => ({
  color: props.theme.palette.secondary.inverse,
  fontSize: props.theme.typography.fontSize.size5,
  fontFamily: props.theme.typography.family.primary.bold,
}))

export const SubTitle = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontSize: props.theme.typography.fontSize.size4,
  fontFamily: props.theme.typography.family.primary.medium,
}))

export const SheetContainer = styled(BottomSheetView)((props) => ({
  padding: props.theme.size.size5,
}))

export const SheetInput = styled(BottomSheetTextInput)((props) => ({
  borderRadius: props.theme.size.size2,
  fontSize: props.theme.size.size4,
  lineHeight: '20px',
  padding: props.theme.size.size3,
  backgroundColor: props.theme.palette.background.default,
}))
