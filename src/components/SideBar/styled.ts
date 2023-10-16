import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { CSSObject, styled, Theme, Button } from '@mui/material';
import { AsideButtonProps } from './interfaces';


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
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(7),
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

export const DrawerWrapper = styled('div')`
    display: flex;
    height: 100%;
    overflow: hidden;
`

export const DrawerContent = styled('div')(({ theme }) => ({
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
        backgroundColor: ' transparent'
    },

    '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.spacing(.4),
        backgroundColor: theme.palette.scroll.main,
    },

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 1.5),
    },
    position: 'relative',
}))

export const Aside = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: theme.spacing(4),
    borderRight: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
    padding: theme.spacing(3, 2.5),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 1.5),
        rowGap: theme.spacing(1.5),
    },
}))

export const Column = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '96%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse'
    },
}))

export const Logo = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AsideButtonSearch = styled(Button)<AsideButtonProps>(({ theme, isActive }) => ({
    padding: theme.spacing(1.9),
    borderRadius: theme.spacing(.6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isActive? theme.palette.common.white: theme.palette.primary.main,
    // transition: 'all .3s ease-in-out',

    '&:hover':{
        outline: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
        backgroundColor: isActive? theme.palette.common.white: theme.palette.primary.main,
    },

    ...(isActive && {
        outline: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
        '& svg path': {
            fill: theme.palette.primary.main,
        }
    }),

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(.8, .9),
    },
}))

export const AsideButtonFavorites = styled(Button)<AsideButtonProps>(({ theme, isActive }) => ({
    padding: theme.spacing(1.8, 2.1),
    borderRadius: theme.spacing(.6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isActive? theme.palette.common.white: theme.palette.secondary.main,

    '&:hover':{
        outline: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
        backgroundColor: isActive? theme.palette.common.white: theme.palette.secondary.main,
    },

    ...(isActive && {
        outline: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
        '& svg path': {
            fill: theme.palette.secondary.main,
        }
    }),

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(.8, 1.1)
    },
}))

export const AvatarAside = styled(Avatar)(({ theme }) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    width: theme.spacing(4.8),
    height: theme.spacing(4.8),
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}))

export const ListSections = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1.5),
    padding: 0,
    margin: 0,
}))

export const Container = styled('div')`
    position: relative;
`

export const ArrowBox = styled('div')(({theme}) => ({
    borderRadius: theme.spacing(0, 1, 1, 0),
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    right: `-${theme.spacing(6.6)}`,
    padding: theme.spacing(3.2, 1.8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    color: '#000',
    // border: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
    borderLeft: 'none',

    '&:hover': {
        cursor: 'pointer'
    }
}))