import { Typography } from "@mui/material"
import { ErrorBoundaryWrapper } from "./styled"
import { ButtonRetry } from "@/UI/ButtonRetry"
import { MapErrorProps } from "./interfaces"

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