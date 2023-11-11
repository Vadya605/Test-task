import { createTheme,PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        borderPrimary: {
            main: string
        },
        borderSecondary: {
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
        },
        progress: {
            main: string
        },
        suggestionHover: {
            main: string
        },
        circleFill: {
            main: string
        },
        mapLabel: {
            main: string
        },
        mapLandscape: {
            main: string
        }
        mapHighway: {
            main: string
        },
        mapHighwayStroke: {
            main: string
        },
        mapWater: {
            main: string
        },
        errorMessage: {
            main: string
        },
        buttonExit: {
            main: string
        },
        recommendation: {
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
        progress: {
            main: string
        },
        suggestionHover: {
            main: string
        },
        circleFill: {
            main: string
        },
        mapLabel: {
            main: string
        },
        mapLandscape: {
            main: string
        }
        mapHighway: {
            main: string
        },
        mapHighwayStroke: {
            main: string
        },
        mapWater: {
            main: string
        },
        errorMessage: {
            main: string
        },
        buttonExit: {
            main: string
        },
        recommendation: {
            main: string
        }
    }
}

export const getTheme = (mode: PaletteMode) => {
    const theme = createTheme(
        {
            palette: {
                mode,
                ...(mode === 'light' ? {
                    primary: {
                        main: '#5E7BC7',
                    },
                    secondary: {
                        main: '#C75E5E'
                    },
                    background: {
                        // default: '#ffffff',
                        // paper: '#fffffe'
                    },
                    borderPrimary: {
                        main: '#C4C4C4',
                    },
                    borderSecondary: {
                        main: '#F5F5F5'
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
                    },
                    progress: {
                        main: '#E8EDF1'
                    },
                    suggestionHover: {
                        main: 'rgba(0, 0, 0, .1)'
                    },
                    circleFill: {
                        main: '#5E7BC7'
                    },
                    mapLabel: {
                        main: '#878787'
                    },
                    mapLandscape: {
                        main: '#f9f5ed'
                    },
                    mapHighway: {
                        main: '#f5f5f5'
                    },
                    mapHighwayStroke: {
                        main: '#c9c9c9'
                    },
                    mapWater: {
                        main: '#aee0f4'
                    },
                    errorMessage: {
                        main: '#FF0000'
                    },
                    buttonExit: {
                        main: '#808080'
                    },
                    recommendation: {
                        main: '#F3A712'
                    }
                } : {
                    primary: {
                        // main: '#121B33',
                        main: '#20315D'
                    },
                    secondary: {
                        // main: '#331212'
                        main: '#5D2020'
                    },
                    background: {
                        // default: '#22333B',
                        paper: '#151918'
                    },
                    borderPrimary: {
                        main: '#383838',
                    },
                    borderSecondary: {
                        main: '#F5F5F5'
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
                    },
                    progress: {
                        main: '#E8EDF1'
                    },
                    suggestionHover: {
                        main: 'rgba(0, 0, 0, .1)'
                    },
                    circleFill: {
                        main: '#5E7BC7'
                    },
                    mapLabel: {
                        main: '#878787'
                    },
                    mapLandscape: {
                        main: '#f9f5ed'
                    },
                    mapHighway: {
                        main: '#f5f5f5'
                    },
                    mapHighwayStroke: {
                        main: '#c9c9c9'
                    },
                    mapWater: {
                        main: '#aee0f4'
                    },
                    errorMessage: {
                        main: '#FF0000'
                    },
                    buttonExit: {
                        main: '#2C2C2C'
                    },
                    recommendation: {
                        main: '#583C04'
                    }
                })
            },
            typography: {
                fontFamily: ['Mont', 'sans-serif'].join(','),
                h1: {
                    fontSize: 'calc(16px + (24 - 16) * ((100vw - 375px) / (1920 - 375)))',
                    fontWeight: 600
                },
                h2: {
                    fontSize: 'calc(16px + (20 - 16) * ((100vw - 375px) / (1920 - 375)))',
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
                    fontSize: 'calc(14px + (16 - 14) * ((100vw - 375px) / (1920 - 375)))',
                    fontWeight: 400
                },
                body2: {
                    fontSize: 14,
                    fontWeight: 400
                },
                button: {
                    textTransform: 'none',
                    fontSize: 'calc(12px + (14 - 12) * ((100vw - 375px) / (1920 - 375)))',
                    fontWeight: 600
                },
                caption: {
                    fontSize: 'calc(12px + (16 - 12) * ((100vw - 375px) / (1920 - 375)))',
                    opacity: .5,
                    fontWeight: 400
                }
            },
            spacing: 10,
        }
    )

    return theme
}
