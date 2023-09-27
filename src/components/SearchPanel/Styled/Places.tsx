import { styled } from '@mui/material/styles';
  
interface PlaceProps {
    isSelected: boolean;
}

export const Places = styled('div')(() => ({
    padding: '10px 17px 3px 17px',
    border: '3px solid #C4C4C4',
    borderRadius: '10px'
}))

export const PlacesWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    height: '456px',
    paddingRight: '35px',
    overflowY: 'scroll',

    '&::-webkit-scrollbar': {
        width: '5px'
    },
       
    '&::-webkit-scrollbar-track': {
        backgroundColor:' transparent'
    },
    
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
}))

export const Place = styled('div')<PlaceProps>(({ isSelected }) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: '20px',
    opacity: isSelected? '0.5': 1,
    '& img': {
        width: '30px'
    }
}));