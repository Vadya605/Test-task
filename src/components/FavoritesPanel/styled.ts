import { CircularProgress, IconButton,styled } from "@mui/material";

export const HeaderPanel = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
}))

export const ButtonBack = styled(IconButton)`
    padding: 0;
    margin: 0;
    & img {
        transform: rotate(180deg);
    }
`
export const BoxLoader = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Loader = styled(CircularProgress)(({theme}) => ({
    width: theme.spacing(6),
    height: theme.spacing(6)
}))