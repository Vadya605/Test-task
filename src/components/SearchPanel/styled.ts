import { Button, Input } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PlaceProps } from './interface';
  
export const ButtonSearch = styled(Button)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1.9, 16.1),
    borderRadius: theme.spacing(1),
    '&:hover':{
        backgroundColor: theme.palette.primary.main
    }
}))

  export const Places = styled('div')(({theme}) => ({
    padding: theme.spacing(1, 1.7, .3, 1.7),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(1),
}))

export const PlacesWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    height: theme.spacing(45.6),
    paddingRight: theme.spacing(3.5),
    overflowY: 'scroll',

    '&::-webkit-scrollbar': {
        width: theme.spacing(.5)
    },
       
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
    },
    
    '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.spacing(.4),
        backgroundColor: theme.palette.scroll.main,
    }
}))

export const Place = styled('div')<PlaceProps>(({ isSelected, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(2),
    opacity: !isSelected? '0.5': 1,
    '& img': {
        width: theme.spacing(3)
    }
}));
  
export const RadiusBox = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1.5)
}))

export const RadiusInput = styled(Input)(({theme}) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2.5),
    lineHeight: 'none',
    width: theme.spacing(10),
    '&::before, &::after':{
        content: 'none'
    },
}))

export const SearchPanelWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2)
}))