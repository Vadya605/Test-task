import { styled } from "@mui/material";

export const FormAuth = styled('form')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1.5),
}))