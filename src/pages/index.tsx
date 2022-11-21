import { Button, Container } from '@mui/material'
import Link from 'next/link'
import { config } from '@site.config'
import SeoHead from '@src/components/SeoHead'

const Home = () => {
  return (
    <>
      <SeoHead title={config.siteMeta.title} removeSiteNameFromTitle path="/" />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Button variant="contained">Contained</Button>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
        <Link href="/terms-of-use">利用規約</Link>
      </Container>
    </>
  )
}

export default Home
