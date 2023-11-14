import { styled } from "@mui/material";

import { IPlaceProps } from "./interfaces";

export const Places = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1.7, .3, 1.7),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(1),
}))

export const PlacesWrapper = styled('div')(({ theme }) => ({
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

export const Place = styled('div')<IPlaceProps>(({ isSelected, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(2),
    opacity: !isSelected ? '0.5' : 1,
    whiteSpace: 'normal',
    '& img': {
        width: theme.spacing(3)
    },
    '&:hover': {
        cursor: 'pointer'
    }
}));