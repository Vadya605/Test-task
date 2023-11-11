import { Typography } from '@mui/material'

import { ERRORS } from '@/constants'
import { ButtonRetry } from '@/UI'

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