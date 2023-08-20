import { styled } from 'styled-components/native'

export const Container = styled.View((props) => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: props.theme.size.size3,
  marginHorizontal: props.theme.size.size5,
  marginVertical: props.theme.size.size6,
}))
