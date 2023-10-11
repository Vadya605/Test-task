import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonRoute = styled(Button)(({theme}) => ({
    borderRadius: theme.spacing(.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.2),
    color: theme.palette.common.white,
    padding: theme.spacing(1, 1.5),
    backgroundColor: theme.palette.primary.main,

    '&:hover':{
        backgroundColor: theme.palette.primary.main,
        border: 'none'
    }
}))