import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from './Link'

const Footer = () => {
  return (
    <footer>
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          py: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          borderTop: (theme) => `.5px solid ${theme.palette.divider}`,
        }}
      >
        <Box>
          <Link href="/privacy-policy" underline="hover">
            プライバシーポリシー
          </Link>
          &nbsp;･&nbsp;
          <Link href="/terms-of-use" underline="hover">
            利用規約
          </Link>
        </Box>
        © Copyright {new Date().getFullYear()} Devroll. All rights reserved.
      </Container>
    </footer>
  )
}

export default Footer
