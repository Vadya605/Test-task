import { Box, Input } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { CSSObject,styled, Theme } from '@mui/material/styles';

import Search from '../svg/Search';

export const Aside = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRight: '3px solid #F5F5F5',
    padding: '30px 25px',
}))

export const Logo = styled('div')(() => ({
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
}))

export const AsideButtonSearch = styled('div')(() => ({
    marginBottom: '10px',
    width: '60px',
    height: '60px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E7BC7'
}))

export const AsideButtonFavorites = styled('div')(() => ({
    marginBottom: '10px',
    padding: '18px 21px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C75E5E',
    transition: 'all .2s ease-in-out',
}))
  
export const AvatarAside = styled(Avatar)(() => ({
    border: '3px solid rgba(0, 0, 0, .2)',
    width: '48px',
    height: '48px'
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
    width: `calc(${theme.spacing(11)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(13)} + 1px)`,
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

export const DrawerContent = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    padding: '25px',
    overflowY: 'auto',
    maxHeight: '100vh',
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

export const SearchBox = styled(Box)(() => ({
    border: '3px solid #C4C4C4',
    borderRadius: '10px',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    columnGap: '20px'
}))

export const SearchIcon = styled(Search)(() => ({
    '& path':{
        fill: '#C4C4C4'
    }
}))


export const SearchInput = styled(Input)(() => ({
    fontSize: '16px',
    '&::before, &::after':{
        content: 'none'
    },
}))

export const ListSections = styled(List)(() => ({
    marginTop: '40px'
}))