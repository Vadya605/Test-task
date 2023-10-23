import { styled, List, ListItem  } from '@mui/material'

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