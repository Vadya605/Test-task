import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from "@mui/material"

export const ButtonAuth = styled(LoadingButton)(({theme}) => ({
    width: '100%',
    marginTop: theme.spacing(2.5),
}))