import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonRoute = styled(Button)(() => ({
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#FFF',
    fontSize: '14px',
    padding: '10px 15px',
    backgroundColor: '#5E7BC7',
    textTransform: 'none',

    '&:hover':{
        backgroundColor: '#5E7BC7',
        border: 'none'
    }
}))