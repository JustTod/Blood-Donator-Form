import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './style/theme'
import InputField from 'components/InputField'
import { Typography } from '@mui/material'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h1'>Learning TS with MUI5</Typography>
      <InputField />
    </ThemeProvider>
  )
}

export default App
