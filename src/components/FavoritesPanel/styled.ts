import { styled } from "@mui/material/styles";

export const HeaderPanel = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1.5)
}))

export const IconBack = styled('img')(() => ({
    transform: 'rotate(180deg)',
}))