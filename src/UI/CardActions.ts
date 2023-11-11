import { CardActions as Actions, styled } from "@mui/material";

export const CardActions = styled(Actions)(({theme}) => ({
    padding: theme.spacing(1, 0),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
        '& button': {
            '& span': {
                display: 'none'
            }
        }
    }
}))