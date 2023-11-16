import { Typography } from '@mui/material'

import { ERRORS } from '@/constants'
import { ButtonRetry } from '@/UI'
import { handleClickRetry } from '@/utils'

export default function FavoritesError() {
    return (
        <>
            <Typography variant="h1">{ERRORS['error-favorites']} </Typography>
            <ButtonRetry onClick={handleClickRetry}>Повторить</ButtonRetry>
        </>
    )
}
