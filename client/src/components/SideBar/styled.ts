import { CSSObject, IconButton, styled, Theme } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'

const openedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowY: 'hidden',
})

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
})

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}))

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
        width: theme.spacing(0.5),
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: ' transparent',
    },

    '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.spacing(0.4),
        backgroundColor: theme.palette.scroll.main,
    },

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 1.5),
    },
    position: 'relative',
}))

export const Container = styled('div')`
    position: relative;
`

export const ArrowOpen = styled('div')(({ theme }) => ({
    borderRadius: theme.spacing(0, 1, 1, 0),
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    right: `-${theme.spacing(7)}`,
    padding: theme.spacing(3.2, 1.8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    border: `${theme.spacing(0.3)} solid ${theme.palette.borderSecondary.main}`,
    borderLeft: 'none',

    '&:hover': {
        cursor: 'pointer',
    },
}))

export const ArrowClose = styled(IconButton)`
    align-self: end;
`
