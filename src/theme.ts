import { PaletteMode } from '@mui/material'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#00677f', // Primary
            light: '#4895ae',
            dark: '#003c53',
            contrastText: '#ffffff', // On Primary
          },
          secondary: {
            main: '#4c626a', // Secondary
            light: '#798f98',
            dark: '#23383f',
            contrastText: '#ffffff', // On Secondary
          },
        }
      : {
          primary: {
            main: '#4fd6fe', // Primary
            light: '#8cffff',
            dark: '#00a4cb',
            contrastText: '#003543', // On Primary
          },
          secondary: {
            main: '#b3cad4', // Secondary
            light: '#e5fdff',
            dark: '#8399a3',
            contrastText: '#1e333b', // On Secondary
          },
          text: {
            primary: '#E1E3E4', // On Background
            secondary: '#E1E3E4', // On Surface
            disabled: '#BFC8CC', // On Surface Variant
          },
          divider: '#8A9296', // Outline
          background: {
            paper: '#191C1D', // Surface
            default: '#191C1D', // Background
          },
        }),
  },
})
