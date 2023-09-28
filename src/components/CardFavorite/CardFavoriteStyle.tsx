import { styled } from '@mui/material/styles';
import { Card, Button, CardActions } from '@mui/material';

interface CardHeaderProps {
    isExpanded: boolean
}

interface PhotoProps {
    backgroundUrl: string,
    isExpanded: boolean
}

interface PlaceIconProps {
    isExpanded: boolean
}

export const FavoriteCard = styled(Card)(() => ({
    width: '400px',
    whiteSpace: 'normal',
    borderRadius: '10px',
    border: '3px solid #C4C4C4',
    boxShadow: 'none',
    marginBottom: '25px'
}))

export const CardWrapper = styled('div')(() => ({
    padding: '20px 25px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    margin: '0px'
}))

export const CardHeader = styled('div')<CardHeaderProps>(({isExpanded}) => ({
    display: 'flex',
    gap: '15px',
    flexDirection: isExpanded? 'column': 'row',
    alignItems: 'center'
}))

export const Photo = styled('div')<PhotoProps>(({ backgroundUrl, isExpanded }) => ({
    borderRadius: '10px',
    width: isExpanded?'350px':'200px',
    height: isExpanded? '280px': '100px',
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

export const PhotoIcon = styled('img')<PlaceIconProps>(({isExpanded}) => ({
    width: isExpanded? '30px': '18px' 
}))

export const Actions = styled(CardActions)(() => ({
    padding: '0px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))

export const ButtonSave = styled(Button)(() => ({
    border: '3px solid #C4C4C4',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#808080',
    fontSize: '14px',
    padding: '10px 15px',
    textTransform: 'none',
    '& svg path':{
        fill: '#C75E5E'
    }
}))

export const ButtonRoute = styled(Button)(() => ({
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#FFF',
    fontSize: '14px',
    padding: '10px 15px',
    backgroundColor: '#5E7BC7',
    textTransform: 'none'
}))




