import { Typography } from '@mui/material'

import { ButtonRetry } from '@/UI'
import { ERRORS } from '@/constants'

export default function FavoritesError(){
    
    const handleClickRetry = () => {
        window.location.reload()
    }
    
    return (
        <>
            <Typography variant='h1' >{ ERRORS['error-favorites'] } </Typography>
            <ButtonRetry onClick={handleClickRetry}>Повторить</ButtonRetry>
        </>
    )
}