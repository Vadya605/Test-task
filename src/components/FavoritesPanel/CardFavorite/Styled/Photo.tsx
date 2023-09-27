import { styled } from '@mui/material/styles';
  
interface PhotoProps {
    backgroundUrl: string,
    isExpanded: boolean
}

interface PlaceIconProps {
    isExpanded: boolean
}

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



