import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Search from '../svg/Search';
import { Box, Input } from '@mui/material';

export const Aside = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

const drawerWidth = 550

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',

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
        width: drawerWidth,
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
    justifyContent: 'space-between',
    columnGap: '20px',
    padding: '25px'
}))

export const DrawerContent = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px'
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
  
export const SectionItem = styled(ListItem)(() => ({
    // marginBottom: '10px',
    // width: '60px',
    // height: '60px',
    // borderRadius: '6px',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#5E7BC7'
}))