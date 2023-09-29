import { styled } from "@mui/material/styles";

export const HeaderPanel = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: '15px'
}))

export const IconBack = styled('img')(() => ({
    transform: 'rotate(180deg)',
}))