import { styled } from "@mui/material";

export const DialogHeader = styled('div')(({ theme }) => ({
    padding: theme.spacing(1.6, 1.6, 0, 2.4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))