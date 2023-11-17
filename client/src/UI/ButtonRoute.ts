import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ButtonRoute = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.2),
    color: theme.palette.common.white,
    width: '100%',
    padding: theme.spacing(1.25, 0),
    backgroundColor: theme.palette.primary.main,

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        border: 'none',
    },
}))
