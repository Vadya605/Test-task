import { Card, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

interface PhotoProps {
    backgroundUrl: string
}

export const CardExpanded = styled(Card)(({theme}) => ({
    maxWidth: theme.spacing(44),
    whiteSpace: 'normal',
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    boxShadow: 'none',
}))

export const CardWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(2, 2.5),
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
    margin: theme.spacing(0)
}))

export const CardHeader = styled('div')(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(1.5),
    flexDirection: 'column',
}))

export const Photo = styled('div')<PhotoProps>(({ backgroundUrl, theme }) => ({
    borderRadius: theme.spacing(1),
    width: theme.spacing(40),
    height: theme.spacing(30),
    background: `url('${backgroundUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
}));

export const PhotoIconsWrapper = styled('div')(({theme}) => ({
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