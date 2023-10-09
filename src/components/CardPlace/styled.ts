import { CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardPlaceWrapper = styled('div')(() => ({
    maxWidth: '300px',
}))

export const PhotoPlace = styled('img')(() => ({
    width: '100%',
    height: '100%',
    borderRadius: '5px',
}))

export const Actions = styled(CardActions)(() => ({
    padding: '10px 0px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))