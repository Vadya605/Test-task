import { Button, Input } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonSearch = styled(Button)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1.9),
    width: '100%',
    borderRadius: theme.spacing(1),
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    }
}))

export const RadiusBox = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1.5)
}))

export const RadiusInput = styled(Input)(({ theme }) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2.5),
    lineHeight: 'none',
    width: theme.spacing(10),
    '&::before, &::after': {
        content: 'none'
    },
}))

export const SearchPanelWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2)
}))