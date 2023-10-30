import { LinearProgress, styled } from "@mui/material";

export const Details = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    position: 'absolute',
    right: theme.spacing(1),
    bottom: theme.spacing(1)
}))

export const DetailsWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
}))

export const Row = styled('div')(({ theme }) => ({
    display: 'flex',
    columnGap: theme.spacing(1)
}))

export const Progress = styled(LinearProgress)(({ theme }) => ({
    borderRadius: theme.spacing(3),
    height: theme.spacing(.6),
    marginBottom: theme.spacing(1),

    backgroundColor: theme.palette.progress.main,

    '& span': {
        borderRadius: theme.spacing(4),
        backgroundColor: theme.palette.secondary.main
    }
}))

export const ButtonRemoveRoute = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1)
}))