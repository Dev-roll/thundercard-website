import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
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
