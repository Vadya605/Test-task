import { styled } from '@mui/material'

export const RecommendationPanelWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
}))

export const RecommendationSelector = styled('div')(({ theme }) => ({
    display: 'flex',
    columnGap: theme.spacing(1),
    '& button': {
        width: '100%',
    },
}))

export const BoxLoader = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
