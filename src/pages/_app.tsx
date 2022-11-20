import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import { getDesignTokens } from 'theme'

export default function App({ Component, pageProps }: AppProps) {
  // TODO: #8 light/dark モードを変更可能にする
  const mode = 'dark'
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <>
      <Head>
        <title>Thundercard</title>
        <meta
          name="description"
          content="Thundercardは名刺をヒントに開発された全く新しいSNSです。 SNSを使う若い世代，紹介したいプロフィールがたくさんあるエンジニアやクリエイターのみなさんに最適です。アプリで作ったカードを二次元バーコード・URL・画像で素早く交換。ワンタップで連絡先にアクセス，相手にメッセージを送ることもできます。"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
