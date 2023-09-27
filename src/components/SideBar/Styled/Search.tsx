import { Box, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import Search from '../../svg/Search';
  
export const SearchBox = styled(Box)(() => ({
    border: '3px solid #C4C4C4',
    borderRadius: '10px',
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
    fontSize: '16px',
    '&::before, &::after':{
        content: 'none'
    },
}))