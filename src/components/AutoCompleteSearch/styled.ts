import { Box, Input, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import Search from '../svg/Search';

interface SearchBoxProps {
    isActive: boolean
}

export const AutoCompeteSearchWrapper = styled('div')(() => ({
    position:'relative',
}))

export const SearchBox = styled(Box)<SearchBoxProps>(({ isActive }) => ({
    border: '3px solid #C4C4C4',
    borderRadius: isActive?'10px 10px 0 0': '10px',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    columnGap: '20px'
}))

export const SearchIcon = styled(Search)(() => ({
    '& path':{
        fill: '#C4C4C4'
    }
}))


export const SearchInput = styled(Input)(() => ({
    width: '100%',
    fontSize: '16px',
    '&::before, &::after':{
        content: 'none'
    },
}))


export const ListSuggestions = styled(List)(() => ({
    boxSizing: 'border-box',
    zIndex: '10',
    top: '65px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    padding: '0px',
    borderRadius: '0px 0px 10px 10px',
    border: '3px solid #C4C4C4',
    borderTop: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    whiteSpace: 'normal',
}))

export const ListSuggestionsItem = styled(ListItem)(() => ({
    wordWrap: 'normal',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '5px',
    alignItems: 'flex-start',
    "&:hover" : {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        cursor: 'pointer'
    }
}))