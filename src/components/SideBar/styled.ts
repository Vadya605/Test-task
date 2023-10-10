import { Box, Input } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { CSSObject,styled, Theme } from '@mui/material/styles';

import Search from '../svg/Search';

export const Aside = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRight: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
    padding: theme.spacing(3, 2.5),
}))

export const Logo = styled('div')(() => ({
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
}))

export const AsideButtonSearch = styled('div')(({theme}) => ({
    marginBottom: theme.spacing(1),
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.spacing(.6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.buttonPrimary.main
}))

export const AsideButtonFavorites = styled('div')(({theme}) => ({
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1.8, 2.1),
    borderRadius: theme.spacing(.6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.buttonSecondary.main,
}))
  
export const AvatarAside = styled(Avatar)(({theme}) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    width: theme.spacing(4.8),
    height: theme.spacing(4.8)
}))

const openedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowY: 'hidden',
});
  
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(11),
    [theme.breakpoints.up('sm')]: {
        width: theme.spacing(11),
    },
});
  
export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
  
export const DrawerWrapper = styled('div')(() => ({
    display: 'flex',
    height: '100%',
    overflow: 'hidden'
}))

export const DrawerContent = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    padding: theme.spacing(2.5),
    overflowY: 'auto',
    maxHeight: '100vh',
    '&::-webkit-scrollbar': {
        width: theme.spacing(.5)
    },
       
    '&::-webkit-scrollbar-track': {
        backgroundColor:' transparent'
    },
    
    '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.spacing(.4),
        backgroundColor: theme.palette.scroll.main,
    }
}))

export const SearchBox = styled(Box)(({theme}) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(2)
}))

export const SearchIcon = styled(Search)(({theme}) => ({
    '& path':{
        fill: theme.palette.common.white
    }
}))


export const SearchInput = styled(Input)(() => ({
    '&::before, &::after':{
        content: 'none'
    },
}))

export const ListSections = styled(List)(({theme}) => ({
    marginTop: theme.spacing(4)
}))