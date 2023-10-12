import { CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardPlaceWrapper = styled('div')(({theme}) => ({
    color: theme.palette.common.black,
    maxWidth: theme.spacing(30),
}))

export const PhotoPlace = styled('img')(({theme}) => ({
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(.5),
}))

export const Actions = styled(CardActions)(({theme}) => ({
    padding: theme.spacing(1, 0),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))