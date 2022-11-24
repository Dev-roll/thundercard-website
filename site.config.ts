export const config = {
  siteMeta: {
    title: 'Thundercard',
    description:
      'Thundercardは名刺をヒントに開発された全く新しいSNSです。 SNSを使う若い世代，紹介したいプロフィールがたくさんあるエンジニアやクリエイターのみなさんに最適です。アプリで作ったカードを二次元バーコード・URL・画像で素早く交換。ワンタップで連絡先にアクセス，相手にメッセージを送ることもできます。',
  },
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://thundercard.gajeroll.com'
      : 'http://localhost:3000',
}
