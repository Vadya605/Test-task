import { styled } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';

export const ButtonAuth = styled(LoadingButton)(({theme}) => ({
    width: '100%',
    marginTop: theme.spacing(2.5),
}))