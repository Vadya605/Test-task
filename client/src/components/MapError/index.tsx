import { Typography } from "@mui/material"

import { ERRORS } from "@/constants"
import { ButtonRetry } from "@/UI"

import { ErrorBoundaryWrapper } from "./styled"

export default function MapError(){
    const handleClickRetry = () => {
        window.location.reload()
    }
    
    return (
        <ErrorBoundaryWrapper>
            <Typography variant="h1">{ ERRORS['error-map'] }</Typography>
            <ButtonRetry onClick={handleClickRetry}>
                Повторить
            </ButtonRetry>
        </ErrorBoundaryWrapper>
    )
} 