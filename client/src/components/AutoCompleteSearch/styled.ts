import { Box, Input} from '@mui/material';
import { styled } from '@mui/material/styles';

import Search from '../svg/Search';
import { ISearchBoxProps } from './interfaces';

export const AutoCompeteSearchWrapper = styled('div')`
    position: relative;
`;

export const SearchBox = styled(Box)<ISearchBoxProps>(({ theme, isActive }) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: isActive? theme.spacing(1, 1, 0, 0): theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(2)
}))

export const SearchIcon = styled(Search)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
    '& path':{
        fill: '#C4C4C4'
    }
}))

export const SearchInput = styled(Input)`
    &::before, &::after{
        content: none
    }
`;