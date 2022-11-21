import Container from '@mui/material/Container'
import { config } from '@site.config'
import Link from '@src/components/Link'
import SeoHead from '@src/components/SeoHead'

const Home = () => {
  return (
    <>
      <SeoHead title={config.siteMeta.title} removeSiteNameFromTitle path="/" />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Link
          href="https://github.com/Dev-roll/thundercard"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
      </Container>
    </>
  )
}

export default Home
