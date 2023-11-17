import { Avatar, List, styled, Theme } from '@mui/material'

import { IActiveProps } from '@/interfaces'
import { CSSObject } from '@emotion/react'

export const AsideWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: theme.spacing(2.5),
    borderRight: `${theme.spacing(0.3)} solid ${theme.palette.borderPrimary.main}`,
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
        flexDirection: 'column-reverse',
    },
}))

export const ListSections = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1.5),
    padding: 0,
    margin: 0,
}))

const AsideButtonMixin = (theme: Theme, isActive: boolean, bgColor: string): CSSObject => ({
    cursor: 'pointer',
    borderRadius: theme.spacing(0.6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isActive ? theme.palette.common.white : bgColor,

    '&:hover': {
        outline: `${theme.spacing(0.3)} solid ${theme.palette.borderSecondary.main}`,
        backgroundColor: isActive ? theme.palette.common.white : bgColor,
    },

    ...(isActive && {
        outline: `${theme.spacing(0.3)} solid ${theme.palette.borderSecondary.main}`,
        '& svg path': {
            fill: bgColor,
        },
    }),
})

export const AsideButtonSearch = styled('div')<IActiveProps>(({ theme, isActive }) => ({
    ...AsideButtonMixin(theme, isActive, theme.palette.primary.main),
    padding: theme.spacing(1.9),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.8, 0.9),
    },
}))

export const AsideButtonFavorites = styled('div')<IActiveProps>(({ theme, isActive }) => ({
    ...AsideButtonMixin(theme, isActive, theme.palette.secondary.main),
    padding: theme.spacing(1.8, 2.1),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.8, 1.1),
    },
}))

export const AsideButtonRecommendation = styled('div')<IActiveProps>(({ theme, isActive }) => ({
    ...AsideButtonMixin(theme, isActive, theme.palette.recommendation.main),
    padding: theme.spacing(1.9),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.8, 1.1),
    },
}))

export const AvatarAside = styled(Avatar)(({ theme }) => ({
    border: `${theme.spacing(0.3)} solid ${theme.palette.borderPrimary.main}`,
    width: theme.spacing(4.8),
    height: theme.spacing(4.8),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(1.5),
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}))

export const Exit = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1.4, 1.4, 1.4, 1.2),
    backgroundColor: theme.palette.buttonExit.main,
    borderRadius: theme.spacing(0.6),
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.8, 0.8, 0.8, 0.6),
    },
}))
