import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import './index.css'
import App from './App'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#00bcd4',
            main: '#00bcd4',
            dark: '#00bcd4',
        },
        secondary: {
            light: '#00bcd4',
            main: '#00bcd4',
            dark: '#00bcd4',
        },
        text: {
            primary: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
        <Analytics />
    </ThemeProvider>,
)
