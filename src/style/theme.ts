import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#db1f13'
    }
  },
  typography: {
    fontFamily: ['THSarabun', 'Arial', 'Helvetica', 'sans-serif'].join(',')
  },
})

export default theme
