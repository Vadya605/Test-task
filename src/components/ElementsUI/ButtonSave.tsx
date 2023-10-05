import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ButtonSave = styled(Button)(() => ({
    border: '3px solid #C4C4C4',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#808080',
    fontSize: '14px',
    padding: '10px 15px',
    textTransform: 'none',
    '& svg path':{
        fill: '#C75E5E'
    },
    '&:hover':{
        border: '3px solid #C4C4C4',
    }
}))

