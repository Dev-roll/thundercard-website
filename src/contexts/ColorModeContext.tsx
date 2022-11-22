import { createTheme, Theme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getDesignTokens } from '@src/theme'
import { ColorModeType } from '@src/types'

type ColorModeContextType = {
  colorMode: ColorModeType
  changeColorMode: (colorMode: string) => void
}

const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: 'system',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeColorMode: () => {},
})

export const useColorModeContext = (): ColorModeContextType =>
  useContext<ColorModeContextType>(ColorModeContext)

interface ColorModeContextProviderProps {
  children?: React.ReactNode
}

export const ColorModeContextProvider = ({
  children,
}: ColorModeContextProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const systemTheme = useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')),
    [prefersDarkMode]
  )

  const [colorMode, setMode] = useState<ColorModeType>('system')
  const [themeState, setThemeState] = useState<Theme>(systemTheme)

  useEffect(() => {
    colorMode === 'system' && setThemeState(systemTheme)
  }, [systemTheme])

  const changeColorMode = (colorMode: ColorModeType) => {
    switch (colorMode) {
      case 'system':
        setMode('system')
        setThemeState(systemTheme)
        break
      case 'light':
        setMode('light')
        setThemeState(createTheme(getDesignTokens('light')))
        break
      case 'dark':
        setMode('dark')
        setThemeState(createTheme(getDesignTokens('dark')))
        break
    }
  }

  return (
    <ColorModeContext.Provider value={{ colorMode, changeColorMode }}>
      <ThemeProvider theme={themeState}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
