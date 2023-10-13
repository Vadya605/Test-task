import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonFavorite = styled(Button)(({ theme }) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.2),
    color: theme.palette.textButtonSecondary.main,
    width: '100%',
    padding: theme.spacing(1, 0),
    '& svg path':{
        fill: theme.palette.favoriteIconPrimary.main
    },
    '&:hover':{
        border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    }
}))

