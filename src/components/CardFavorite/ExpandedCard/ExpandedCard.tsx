import { Actions, CardExpanded, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper } from "./ExpandedCardStyle";
import Car from '../../../assets/img/icons-markers/car-rear.svg'
import Car2 from '../../../assets/img/icons-markers/car-side.svg'
import Favorite from "../../svg/Favorite";
import Geo from "../../svg/Geo";
import { IFavorite } from "../../../models/IFavorite";
import { ButtonFavorite } from "../../ElementsUI/ButtonFavorite";
import { ButtonRoute } from "../../ElementsUI/ButtonRoute";
import { useAppDispatch } from "../../../hooks/redux";
import { FavoriteServices, SelectedFavoriteServices } from "../../../store/reducers";

interface ExpandedCardProps {
    favoriteItem: IFavorite
}

export default function ExpandedCard({ favoriteItem }: ExpandedCardProps) {
    const dispatch = useAppDispatch()
    
    const handleClickFavorite = () => {
        dispatch(SelectedFavoriteServices.actions.setSelected(''))
        dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))
    }

    const handleClickRoute = () => {
        //
    }
    
    return (
        <CardExpanded>
            <CardWrapper>
                <CardHeader>
                    <Photo backgroundUrl={favoriteItem.photo} >
                        <PhotoIconsWrapper>
                            <PhotoIcon src={Car} />
                            <PhotoIcon src={Car2} />
                        </PhotoIconsWrapper>
                    </Photo>
                    <span>{favoriteItem.name}</span>
                </CardHeader>
                <p>{favoriteItem.description}</p>
                <Actions>
                    <ButtonFavorite onClick={handleClickFavorite}>
                        <Favorite />
                        <span>Удалить</span>
                    </ButtonFavorite>
                    <ButtonRoute onClick={handleClickRoute}>
                        <Geo />
                        <span>Маршрут</span>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
        </CardExpanded>
    )
}