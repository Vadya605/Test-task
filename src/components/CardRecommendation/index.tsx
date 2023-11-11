import { Typography } from "@mui/material";

import FavoriteIcon from "@/assets/img/Favorite.svg";
import GeoIcon from '@/assets/img/Geo.svg'
import { ButtonFavorite, ButtonRoute, CardActions } from "@/UI";

import { ICardRecommendationProps } from "./interfaces";
import { CardRecommendationWrapper, PhotoPlace } from "./styled";

export default function CardRecommendation({ recommendationItem }: ICardRecommendationProps) {
    return (
        <CardRecommendationWrapper>
            <Typography variant="h1" >{recommendationItem.name}</Typography>
            <PhotoPlace src={recommendationItem.photo} alt="Photo" />
            <Typography>{recommendationItem.description}</Typography>
            <CardActions>
                <ButtonFavorite startIcon={<img src={FavoriteIcon} alt="Favotite" />}>
                    Добавить
                </ButtonFavorite>
                <ButtonRoute startIcon={<img src={GeoIcon} alt="Favotite" />}>
                    Маршрут
                </ButtonRoute>
            </CardActions>
        </CardRecommendationWrapper>
    )
}