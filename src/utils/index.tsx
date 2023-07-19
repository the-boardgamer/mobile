import { AuthProvider } from './auth'
import { ThemeProvider } from './theme'

export default function Providers({ children }: { children?: React.ReactNode }): JSX.Element {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
