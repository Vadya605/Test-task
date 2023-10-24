import { styled } from "@mui/material"

export const SupportAction = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: theme.spacing(.5)
}))