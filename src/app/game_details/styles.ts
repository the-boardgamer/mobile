import { styled } from 'styled-components/native'

export const StartContainer = styled.View(() => ({
  position: 'relative',
  height: '300px',
}))

export const ForegroundImage = styled.View(() => ({
  position: 'absolute',
  flex: 1,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const CoverImage = styled.Image((props) => ({
  //   borderTopLeftRadius: props.theme.radius.radius5,
  //   borderBottomLeftRadius: props.theme.radius.radius5,
  //   width: '180px',
  //   height: '105px',
  position: 'absolute',
  top: 0,
  left: 0,
}))
