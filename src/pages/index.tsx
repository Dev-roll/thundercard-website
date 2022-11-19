import { Button } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thundercard</title>
        <meta
          name="description"
          content="Thundercardは名刺をヒントに開発された全く新しいSNSです。 SNSを使う若い世代，紹介したいプロフィールがたくさんあるエンジニアやクリエイターのみなさんに最適です。アプリで作ったカードを二次元バーコード・URL・画像で素早く交換。ワンタップで連絡先にアクセス，相手にメッセージを送ることもできます。"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Button variant="contained">Contained</Button>
    </div>
  )
}
