import { Card, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardExpanded = styled(Card)(({theme}) => ({
    maxWidth: theme.spacing(44),
    whiteSpace: 'normal',
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    boxShadow: 'none',
}))

export const CardWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    margin: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1.5)
    }
}))

export const CardHeader = styled('div')(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(1.5),
    flexDirection: 'column',
}))

export const PhotoWrapper = styled('div')`
    width: auto;
    display: flex;
    justify-content: end;
    align-items: end;
    position: relative;
`;

export const Photo = styled('img')(({theme}) => ({
    borderRadius: theme.spacing(1),
    width: '100%',
    maxWidth: '400px',
    minWidth: '90px'
}));

export const PhotoIconsWrapper = styled('div')(({theme}) => ({
    position: 'absolute',
    padding: theme.spacing(.8),
    display: 'flex',
    columnGap: theme.spacing(.5)
}))

export const PhotoIcon = styled('img')(({theme}) => ({
    width: theme.spacing(3)
}))

export const Actions = styled(CardActions)(({theme}) => ({
    padding: theme.spacing(0),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))