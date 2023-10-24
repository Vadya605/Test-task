import { Button,styled } from '@mui/material'

export const ButtonsControl = styled('div')(({theme}) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    display: 'flex',
    columnGap: theme.spacing(.5),
}))

export const ButtonsZoom = styled('div')(({theme}) => ({
    columnGap: '10px',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(0.3)} solid ${theme.palette.borderPrimary.main}`,
}))

export const ButtonZoom = styled(Button)(({theme}) => ({
    borderRadius: 0,
    padding: theme.spacing(2.3),

    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    }
}))

export const ButtonLocation = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.7),
    border: `${theme.spacing(0.3)} solid ${theme.palette.borderPrimary.main}`,

    '&:hover': {
        border: `${theme.spacing(0.3)} solid ${theme.palette.borderPrimary.main}`,
        backgroundColor: theme.palette.common.white,
        cursor: 'pointer',
    }
}))