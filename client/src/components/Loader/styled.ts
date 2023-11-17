import { keyframes, styled } from '@mui/material'

export const LoaderWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',

    '&:after': {
        content: '""',
        display: 'block',
        width: theme.spacing(12.4),
        height: theme.spacing(12.4),
        margin: theme.spacing(0.8),
        borderRadius: '50%',
        border: `${theme.spacing(0.6)} solid ${theme.palette.loader.main}`,
        borderColor: `${theme.palette.loader.main} transparent ${theme.palette.loader.main} transparent`,
        animation: `${spin} 1.2s linear infinite`,
    },
}))

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
