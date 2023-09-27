import { styled } from '@mui/material/styles';
import { Button, CardActions } from '@mui/material';

export const Actions = styled(CardActions)(() => ({
    padding: '0px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
}))

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
    }
}))

export const ButtonRoute = styled(Button)(() => ({
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#FFF',
    fontSize: '14px',
    padding: '10px 15px',
    backgroundColor: '#5E7BC7',
    textTransform: 'none'
}))