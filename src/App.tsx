import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './style/theme'

import PersonalInfoForm from 'pages/PersonalInfoForm'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <PersonalInfoForm />
    </ThemeProvider>
  )
}

export default App
