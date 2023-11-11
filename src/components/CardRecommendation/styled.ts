import { styled } from "@mui/material";

export const CardRecommendationWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`
}))

export const PhotoPlace = styled('img')(({ theme }) => ({
    borderRadius: theme.spacing(1),
    width: '100%',
    maxWidth: '400px',
    minWidth: '90px'
}))
