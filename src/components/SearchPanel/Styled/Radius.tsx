import { Input, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
  
export const RadiusBox = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: '15px'
}))

export const RadiusInput = styled(Input)(() => ({
    border: '3px solid #C4C4C4',
    borderRadius: '10px',
    padding: '10px 25px 10px 25px',
    lineHeight: 'none',
    width: '100px',
    fontSize: '16px',
    '&::before, &::after':{
        content: 'none'
    },
}))

export const RadiusLabel = styled(InputLabel)(() => ({
    color: '#000',
    fontSize: '16px',
    fontWeight: '600'
}))