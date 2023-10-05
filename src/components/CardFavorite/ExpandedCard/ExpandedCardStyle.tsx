import { styled } from '@mui/material/styles';
import { Card, Button, CardActions } from '@mui/material';

interface PhotoProps {
    backgroundUrl: string
}

export const CardExpanded = styled(Card)(() => ({
    maxWidth: '440px',
    whiteSpace: 'normal',
    borderRadius: '10px',
    border: '3px solid #C4C4C4',
    boxShadow: 'none',
}))

export const CardWrapper = styled('div')(() => ({
    padding: '20px 25px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    margin: '0px'
}))

export const CardHeader = styled('div')(() => ({
    display: 'flex',
    gap: '15px',
    flexDirection: 'column',
}))

export const Photo = styled('div')<PhotoProps>(({ backgroundUrl }) => ({
    borderRadius: '10px',
    width: '400px',
    height: '300px',
    background: `url('${backgroundUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    transition: 'height .3s ease-in-out',
}));

export const PhotoIconsWrapper = styled('div')(() => ({
    padding: '8px',
    display: 'flex',
    columnGap: '5px'
}))

export const PhotoIcon = styled('img')(() => ({
    width: '30px'
}))

export const Actions = styled(CardActions)(() => ({
    padding: '0px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))




