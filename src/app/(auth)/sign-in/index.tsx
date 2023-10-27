import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Device from 'expo-device'
import { useTranslation } from 'react-i18next'

import * as Styled from './styles'
import Button from '@components/button'
import ButtonSocial from '@components/button_social'
import { IconApple, IconFacebook, IconGoogle, IconMeeple } from '@components/icon'
import { useAuth, useTheme } from '@contexts'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Global from '@styles'

export default function SignIn(): JSX.Element {
  const { signIn } = useAuth()
  const { t } = useTranslation()
  const { theme } = useTheme()
  const insets = useSafeAreaInsets()

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null)

  const handleOpen = React.useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleClose = React.useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])

  return (
    <BottomSheetModalProvider>
      <Global.Screen>
        <Styled.Container onPress={handleClose}>
          <Styled.LogoContainer>
            <IconMeeple
              width={150}
              height={150}
              color={theme.palette.foreground.default}
            />
          </Styled.LogoContainer>
          <Styled.Content>
            <Styled.TitleContainer>
              <Styled.Title>{t('login.title')}</Styled.Title>
              <Styled.SubTitle>{t('login.subtitle')}</Styled.SubTitle>
            </Styled.TitleContainer>
            <ButtonSocial
              animation={false}
              label={t('login.google')}
              onPress={(): void => signIn()}
              expanded
              foreground="black"
              background="#FFF"
              icon={<IconGoogle />}
            />
            <ButtonSocial
              animation={false}
              label={t('login.facebook')}
              foreground="#FFF"
              background="#467EEC"
              // onPress={(): void => signIn()}
              expanded
              icon={<IconFacebook />}
            />
            {Device.osName === 'iOS' && (
              <ButtonSocial
                animation={false}
                label={t('login.apple')}
                foreground="white"
                background="black"
                // onPress={(): void => signIn()}
                icon={<IconApple />}
                expanded
              />
            )}
          </Styled.Content>
          <View>
            <Button
              animation={false}
              action
              variant="ghost"
              color="foreground"
              label={t('login.email')}
              onPress={handleOpen}
            />
          </View>
        </Styled.Container>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          enableDynamicSizing
          handleIndicatorStyle={{
            backgroundColor: theme.palette.secondary.inverse,
          }}
          backgroundStyle={{
            backgroundColor: theme.palette.background.variant,
          }}
        >
          <Styled.SheetContainer>
            <Styled.SheetContent>
              <Styled.SheetTitle>{t('login.sheet.title')}</Styled.SheetTitle>
              <Styled.SheetInput
                placeholder={t('login.sheet.email')}
                placeholderTextColor={theme.palette.foreground.shade30}
              />
              <Styled.SheetInput
                placeholder={t('login.sheet.password')}
                placeholderTextColor={theme.palette.foreground.shade30}
              />
              <Button
                label={t('login.sheet.button')}
                action
                style={{ marginBottom: insets.bottom }}
              />
            </Styled.SheetContent>
          </Styled.SheetContainer>
        </BottomSheetModal>
      </Global.Screen>
    </BottomSheetModalProvider>
  )
}
