import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Thundercardは名刺をヒントに開発された全く新しいSNSです。 SNSを使う若い世代，紹介したいプロフィールがたくさんあるエンジニアやクリエイターのみなさんに最適です。アプリで作ったカードを二次元バーコード・URL・画像で素早く交換。ワンタップで連絡先にアクセス，相手にメッセージを送ることもできます。"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
