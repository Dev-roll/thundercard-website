import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import { getDesignTokens } from 'theme'

export default function App({ Component, pageProps }: AppProps) {
  // TODO: #8 light/dark モードを変更可能にする
  const mode = 'dark'
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}
