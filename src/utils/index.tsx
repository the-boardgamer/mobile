import ThemeProvider from './theme/provider'

export default function Providers({ children }: { children?: React.ReactNode }): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>
}
