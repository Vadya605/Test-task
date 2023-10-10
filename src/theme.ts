import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        borderPrimary: {
            main: string
        },
        borderSecondary: {
            main: string
        },
        buttonPrimary: {
            main: string
        },
        buttonSecondary: {
            main: string
        },
        textButtonPrimary: {
            main: string
        },
        textButtonSecondary: {
            main: string
        },
        favoriteIconPrimary: {
            main: string
        },
        scroll: {
            main: string
        },
        loader: {
            main: string
        }
    }
    interface PaletteOptions {
        borderPrimary: {
            main: string
        },
        borderSecondary: {
            main: string
        },
        buttonPrimary: {
            main: string
        },
        buttonSecondary: {
            main: string
        },
        textButtonPrimary: {
            main: string
        },
        textButtonSecondary: {
            main: string
        },
        favoriteIconPrimary: {
            main: string
        },
        scroll: {
            main: string
        },
        loader: {
            main: string
        }
    }
}

export const theme = createTheme({
    palette: {
        borderPrimary: {
            main: '#C4C4C4',
        },
        borderSecondary: {
            main: '#F5F5F5'
        },
        buttonPrimary: {
            main: '#5E7BC7'
        },
        buttonSecondary: {
            main: '#C75E5E'
        },
        textButtonPrimary: {
            main: '#FFFFFF'
        },
        textButtonSecondary: {
            main: '#808080'
        },
        favoriteIconPrimary: {
            main: '#C75E5E'
        },
        scroll: {
            main: '#00000080'
        },
        loader: {
            main: '#4496B9'
        }
    },
    typography: {
        fontFamily: ['Mont', 'sans-serif'].join(','),
        h1: {
            fontSize: 24,
            fontWeight: 600
        },
        h2: {
            fontSize: 20,
            fontWeight: 600
        },
        h3: {
            fontSize: 16,
            fontWeight: 600
        },
        h4: {
            fontSize: 14,
            fontWeight: 500
        },
        body1: {
            fontSize: 16,
            fontWeight: 400
        },
        body2: {
            fontSize: 14,
            fontWeight: 400
        },
        button: {
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 600
        }
    },
    spacing: 10,
})