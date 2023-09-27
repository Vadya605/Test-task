import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
  
interface PhotoProps {
    backgroundUrl: string,
    isExpanded: boolean
}

interface PlaceIconProps {
    isExpanded: boolean
}

interface CardHeaderProps {
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
    flexDirection: isExpanded? 'column': 'row'
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

export const PlaceIconsWrapper = styled('div')(() => ({
    padding: '8px',
    display: 'flex',
    columnGap: '5px'
}))

export const PlaceIcon = styled('img')<PlaceIconProps>(({isExpanded}) => ({
    width: isExpanded? '30px': '18px' 
}))



