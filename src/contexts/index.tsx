import ThemeProvider from './theme/provider'

export default function Contexts({ children }: { children?: React.ReactNode }): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>
}
