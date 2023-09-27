import { styled } from '@mui/material/styles';
  
export const Aside = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const AsideButtonSearch = styled('div')(() => ({
    marginBottom: '10px',
    width: '60px',
    height: '60px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E7BC7'
}))

export const AsideButtonFavorites = styled('div')(() => ({
    marginBottom: '10px',
    padding: '18px 21px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C75E5E',
    transition: 'all .2s ease-in-out',
}))