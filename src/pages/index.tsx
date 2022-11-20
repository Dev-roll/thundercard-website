import { Button, Container } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Button variant="contained">Contained</Button>
      <Link href="/privacy-policy">プライバシーポリシー</Link>
      <Link href="/terms-of-use">利用規約</Link>
    </Container>
  )
}
