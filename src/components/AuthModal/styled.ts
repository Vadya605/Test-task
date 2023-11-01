import { Dialog, DialogContent as Content,styled } from "@mui/material";

export const DialogAuth = styled(Dialog)(({theme}) => ({
    '& [role="dialog"]': {
        maxWidth: theme.spacing(40),
        width: '100%',
    }
}))

export const DialogHeader = styled('div')(({ theme }) => ({
    padding: theme.spacing(1.6, 1.6, 0, 2.4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export const DialogContent = styled(Content)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1)
}))