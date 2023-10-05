import Favorite from "../../svg/Favorite";
import Geo from "../../svg/Geo";
import { Actions, ButtonRoute, ButtonSave } from "./CardActionsStyle";

interface CardActionsProps {
    isFavorite: boolean
}

export default function CardActions({ isFavorite }: CardActionsProps){
    return (
        <Actions>
            <ButtonSave>
                <Favorite />
                <span>{isFavorite? 'Удалить': 'Добавить'}</span>
            </ButtonSave>
            <ButtonRoute>
                <Geo />
                <span>Маршрут</span>
            </ButtonRoute>
        </Actions>
    )
}