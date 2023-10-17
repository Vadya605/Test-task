import {styled, Button} from "@mui/material";

export const ButtonRetry = styled(Button)(({theme}) => ({
    borderRadius: theme.spacing(.5),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.2),
    color: theme.palette.common.white,
    padding: theme.spacing(1.25, 2),
    backgroundColor: theme.palette.primary.main,

    '&:hover':{
        backgroundColor: theme.palette.primary.main,
        border: 'none'
    }
}))