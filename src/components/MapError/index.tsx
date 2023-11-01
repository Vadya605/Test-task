import { Typography } from "@mui/material"

import { ButtonRetry } from "@/UI"

import { ErrorBoundaryWrapper } from "./styled"

export default function MapError(){
    const handleClickRetry = () => {
        window.location.reload()
    }
    
    return (
        <ErrorBoundaryWrapper>
            <Typography variant="h1">С картой пошло что-то не так, попроуйте еще раз</Typography>
            <ButtonRetry onClick={handleClickRetry}>
                Повторить
            </ButtonRetry>
        </ErrorBoundaryWrapper>
    )
} 