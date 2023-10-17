import { Box, Input, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import Search from '../svg/Search';
import { SearchBoxProps } from './interfaces';

export const AutoCompeteSearchWrapper = styled('div')`
    position: relative;
`;

export const SearchBox = styled(Box)<SearchBoxProps>(({ theme, isActive }) => ({
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

export const ListSuggestions = styled(List)(({theme}) => ({
    boxSizing: 'border-box',
    zIndex: '10',
    top: theme.spacing(6.4),
    width: '100%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    padding: 0,
    borderRadius: theme.spacing(0, 0, 1, 1),
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderTop: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    whiteSpace: 'normal',
}))

export const ListSuggestionsItem = styled(ListItem)(({theme}) => ({
    wordWrap: 'normal',
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(.5),
    alignItems: 'flex-start',
    "&:hover" : {
        backgroundColor: theme.palette.suggestionHover.main,
        cursor: 'pointer'
    }
}))