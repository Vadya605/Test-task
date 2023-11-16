import { Typography } from '@mui/material'

import { ERRORS } from '@/constants'
import { ButtonRetry } from '@/UI'

import { ErrorBoundaryWrapper } from './styled'
import { handleClickRetry } from '@/utils'

export default function MapError() {
    return (
        <ErrorBoundaryWrapper>
            <Typography variant="h1">{ERRORS['error-map']}</Typography>
            <ButtonRetry onClick={handleClickRetry}>Повторить</ButtonRetry>
        </ErrorBoundaryWrapper>
    )
}
