import { Typography } from '@mui/material'

import { ButtonRetry } from '@/UI/ButtonRetry'

export default function FavoritesError(){
    
    const handleClickRetry = () => {
        window.location.reload()
    }
    
    return (
        <>
            <Typography variant='h1' >Не удалось загрузить избранное</Typography>
            <ButtonRetry onClick={handleClickRetry}>Повторить</ButtonRetry>
        </>
    )
}