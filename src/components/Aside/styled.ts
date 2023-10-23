import { styled, Avatar, List } from '@mui/material'
import { AsideButtonProps } from './interfaces'

export const AsideWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: theme.spacing(2.5),
    borderRight: `${theme.spacing(.3)} solid ${theme.palette.borderSecondary.main}`,
    padding: theme.spacing(3, 2.5),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 1.5),
        rowGap: theme.spacing(1.5),
    },
}))

export const Logo = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

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

export const ListSections = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1.5),
    padding: 0,
    margin: 0,
}))

export const AsideButtonSearch = styled('div')<AsideButtonProps>(({ theme, isActive }) => ({
    padding: theme.spacing(1.9),
    borderRadius: theme.spacing(.6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isActive? theme.palette.common.white: theme.palette.primary.main,

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

export const AsideButtonFavorites = styled('div')<AsideButtonProps>(({ theme, isActive }) => ({
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
        marginTop: theme.spacing(1.5),
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}))
