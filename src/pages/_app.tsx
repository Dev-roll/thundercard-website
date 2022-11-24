import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import Footer from '@src/components/Footer'
import { ColorModeContextProvider } from '@src/contexts/ColorModeContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />
    </ColorModeContextProvider>
  )
}

export default App
