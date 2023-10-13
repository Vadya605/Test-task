import { CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardPlaceWrapper = styled('div')(({theme}) => ({
    maxWidth: theme.spacing(30),
    color: theme.palette.common.black,
}))

export const PhotoPlace = styled('img')(({theme}) => ({
    marginTop: theme.spacing(1),
    // maxWidth: theme.spacing(25),
    width: '100%',
    borderRadius: theme.spacing(.5),
}))

export const Actions = styled(CardActions)(({theme}) => ({
    padding: theme.spacing(1, 0),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
        '& button': {
            '& span': {
                display: 'none'
            }
        }
    }
}))