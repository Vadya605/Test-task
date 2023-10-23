import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material";

export const DialogAuth = styled(Dialog)(({theme}) => ({
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
        maxWidth: theme.spacing(40),
        width: '100%',
    }
}))