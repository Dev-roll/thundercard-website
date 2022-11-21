import Container from '@mui/material/Container'
import { config } from '@site.config'
import Link from '@src/components/Link'
import SeoHead from '@src/components/SeoHead'

const Home = () => {
  return (
    <>
      <SeoHead title={config.siteMeta.title} removeSiteNameFromTitle path="/" />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
        <Link href="/terms-of-use">利用規約</Link>
        <Link href="https://github.com/Dev-roll/thundercard">GitHub</Link>
      </Container>
    </>
  )
}

export default Home
