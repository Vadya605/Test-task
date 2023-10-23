import { styled, DialogContent as Content } from "@mui/material";

export const DialogContent = styled(Content)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1)
}))