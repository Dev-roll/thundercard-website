import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Image from 'next/image'
import appstore from '@public/appstore.png'
import googleplay from '@public/googleplay.png'
import thumbnail from '@public/thumbnail.png'
import web from '@public/web.png'
import { config } from '@site.config'
import Link from '@src/components/Link'
import SeoHead from '@src/components/SeoHead'
import { useColorModeContext } from '@src/contexts/ColorModeContext'

const Home = () => {
  const { colorMode, changeColorMode } = useColorModeContext()

  return (
    <>
      <SeoHead title={config.siteMeta.title} removeSiteNameFromTitle path="/" />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Image
          alt="thumbnail"
          src={thumbnail}
          placeholder="blur"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <Box
          sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=app.web.thundercard"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={googleplay}
              height="83"
              alt="Google Play で手に入れよう"
            />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/thundercard/id6444392874"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={appstore} height="83" alt="Download on the App Store" />
          </Link>
          <Link
            href="https://thundercard-test.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={web} height="83" alt="Web" />
          </Link>
          <p>Google Play および Google Play ロゴは、Google LLC の商標です。</p>
        </Box>
        <section>
          <h2>未来の名刺，全く新しいSNS。</h2>
          <p>
            Thundercardは名刺をヒントに開発された全く新しいSNSです。
            SNSを使う若い世代，紹介したいプロフィールがたくさんあるエンジニアやクリエイターのみなさんに最適です。
          </p>
        </section>
        <section>
          <h2>あなたのすべてを伝えます。</h2>
          <p>
            名前，勤務先，SNSや連絡先を登録するだけで，あなただけのカードを簡単に作成。もちろんお好みのデザインにカスタマイズできます。
            Thundercardはすべての人に使いやすいアプリを目指して，他の名刺サービスよりたくさんのサービスに対応。
            もし特殊なアカウントを登録したいときでも，お好きなリンクを追加できます。
            登録した情報はいつでも好きなときに変更できます。
          </p>
        </section>
        <section>
          <h2>好きなときに好きなだけ情報を交換。</h2>
          <p>
            名刺の管理が面倒ですか？
            Thundercardなら，他のSNSと同じような感覚で，簡単にカード交換ができます。
            もちろん枚数制限はありません。名刺を忘れる心配は，もうないのです。
            ビデオ会議などオンラインでのやりとりでは，URLや画像データの共有も便利です。
          </p>
        </section>
        <section>
          <h2>ただの名刺アプリではありません，SNSです。</h2>
          <p>
            ワンタップでSNS・連絡先にアクセス，交換した相手との高機能なチャットも楽しめます。
            カード交換後のつながりとチャンスも逃しません。
            対面での出会いをオンラインでも継続させるこのアプリは，オフラインとオンラインとの橋渡しとして機能します。
          </p>
        </section>
        <section>
          <h2>電光石火のカード。</h2>
          <p>
            作ったカードを二次元コード，URL，画像で素早く交換。
            他のSNSアプリの追随を許さない，高速・高性能なバーコード読み取り。
            ストレスのない，世界最速のプロフィール交換を可能にします。
          </p>
        </section>
        <section>
          <h2>
            アプリを使っていない人との名刺交換？Thundercardなら心配いりません。
          </h2>
          <p>
            Thundercardならアプリで作ったカードをボタン一つでエクスポートできるので，いざというときにも安心です。
            もちろん，カメラを使って紙の名刺も追加できます。
            写真を撮るだけで文字認識してくれるので入力する手間はありません。
          </p>
        </section>
        <section>
          <h2>人間中心の美しいUI。</h2>
          <p>
            ThundercardはGoogleが提唱するデザインシステム Material Design 3
            に準拠。 Material Design 3
            のカラーシステムを採用したため、色弱の方も含めて、ボタンや文字をはっきりと認識することができます。
            ダークモードにも対応しています。
          </p>
        </section>
        <Link
          href="https://github.com/Dev-roll/thundercard"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        <Select
          value={colorMode}
          defaultValue="system"
          onChange={(e) => changeColorMode(e.target.value)}
        >
          <MenuItem value="system">System</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </Container>
    </>
  )
}

export default Home
