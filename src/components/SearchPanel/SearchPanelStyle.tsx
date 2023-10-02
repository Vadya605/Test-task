import { Button, Input, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
  
interface PlaceProps {
    isSelected: boolean;
}

export const ButtonSearch = styled(Button)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4496B9',
    padding: '19px 161px',
    borderRadius: '10px',
    '&:hover':{
        backgroundColor: '#4496B9'
    }
}))

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
    opacity: !isSelected? '0.5': 1,
    '& img': {
        width: '30px'
    }
}));
  
export const RadiusBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: '15px'
}))

export const RadiusInput = styled(Input)(() => ({
    border: '3px solid #C4C4C4',
    borderRadius: '10px',
    padding: '10px 25px 10px 25px',
    lineHeight: 'none',
    width: '100px',
    fontSize: '16px',
    '&::before, &::after':{
        content: 'none'
    },
}))

export const RadiusLabel = styled(InputLabel)(() => ({
    color: '#000',
    fontSize: '16px',
    fontWeight: '600'
}))

export const SearchPanelWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
}))