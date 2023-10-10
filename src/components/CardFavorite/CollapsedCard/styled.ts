import { Card, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

import { theme } from '@/theme';

interface PhotoProps {
    backgroundUrl: string
}

export const CardCollapsed = styled(Card)(({theme}) => ({
    marginTop: theme.spacing(1),
    width: theme.spacing(35),
    whiteSpace: 'normal',
    borderRadius: theme.spacing(1),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    boxShadow: 'none',
}))

export const CardWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(1),
    margin: theme.spacing(0)
}))

export const CardHeader = styled('div')(() => ({
    display: 'flex',
    gap: theme.spacing(1.5),
    alignItems: 'center'
}))

export const Photo = styled('div')<PhotoProps>(({ backgroundUrl, theme }) => ({
    borderRadius: theme.spacing(1),
    maxWidth: theme.spacing(12),
    width: '100%',
    height: theme.spacing(10),
    background: `url('${backgroundUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
}));

export const PhotoIconsWrapper = styled('div')(({}) => ({
    padding: theme.spacing(.8),
    display: 'flex',
    columnGap: theme.spacing(.5)
}))

export const PhotoIcon = styled('img')(({theme}) => ({
    width: theme.spacing(1.8)
}))

export const Actions = styled(CardActions)(({theme}) => ({
    padding: theme.spacing(0),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& svg path': {
        fill: theme.palette.favoriteIconPrimary.main
    }
}))