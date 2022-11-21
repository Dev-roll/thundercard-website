import { Button, Container } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Thundercard</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Button variant="contained">Contained</Button>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
        <Link href="/terms-of-use">利用規約</Link>
      </Container>
    </>
  )
}

export default Home
