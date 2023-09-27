import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
  
export const ButtonSearch = styled(Button)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4496B9',
    padding: '19px 161px',
    borderRadius: '10px',
    '&:hover':{
        backgroundColor: '#4496B9'
    }
}))