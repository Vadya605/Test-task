import { styled, DialogActions as Actions } from "@mui/material";

export const DialogActions = styled(Actions)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: theme.spacing(1.6),
    padding: theme.spacing(.8, 2.4, 1.6, 2.4)
}))