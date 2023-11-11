import { LinearProgress, styled,TextField, Tooltip } from "@mui/material";

export const PasswordBox = styled('div')`
    display: flex;
    flex-direction: column;
`

export const Row = styled('div')`
    display: flex;
    align-items: center;
`

export const PasswordTooltip = styled(Tooltip)`
    cursor: pointer;
`

export const PasswordInput = styled(TextField)`
    && {
        & *::before,
        & *::after {
            content: none;
            border: none;
        }
    }
`

export const PasswordStrengthMeter = styled(LinearProgress)(({ theme }) => ({
    height: theme.spacing(.2),
    backgroundColor: theme.palette.progress.main,

    '& span': {
        backgroundColor: theme.palette.secondary.main
    }
}))