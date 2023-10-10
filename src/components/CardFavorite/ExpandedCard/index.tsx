import Typography from '@mui/material/Typography';

import Car from '@/assets/img/icons-markers/car-rear.svg'
import Car2 from '@/assets/img/icons-markers/car-side.svg'
import { ButtonFavorite } from "@/components/ElementsUI/ButtonFavorite";
import { ButtonRoute } from "@/components/ElementsUI/ButtonRoute";
import Favorite from "@/components/svg/Favorite";
import Geo from "@/components/svg/Geo";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { DirectionsRendererServices,FavoriteServices, SelectedFavoriteServices } from "@/store/reducers";

import { CardProps } from '../interface';
import { Actions, CardExpanded, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper } from "./styled";

export default function ExpandedCard({ favoriteItem }: CardProps) {
    const dispatch = useAppDispatch()
    const {center, map} = useTypeSelector(state => state.Map)

    const handleClickFavorite = () => {
        dispatch(SelectedFavoriteServices.actions.setSelected(''))
        dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))
    }

    const handleClickRoute = () => {
        const directionService = new google.maps.DirectionsService()
        const directionRequest = {
            origin: center,
            destination: {
                lat: favoriteItem.location.lat,
                lng: favoriteItem.location.lng
            },
            travelMode: google.maps.TravelMode.WALKING
        }
        directionService.route(directionRequest, (result, status) => {
            if(status === google.maps.DirectionsStatus.OK){
                const directionsRenderer = new google.maps.DirectionsRenderer({
                    map: map,
                    directions: result
                })
                
                dispatch(DirectionsRendererServices.actions.setDirectionsRenderer(directionsRenderer))
            } else {
                console.log('Error');
            }
        })
    }
    
    return (
        <CardExpanded>
            <CardWrapper>
                <CardHeader>
                    <Photo backgroundUrl={favoriteItem.photo} >
                        <PhotoIconsWrapper>
                            <PhotoIcon src={Car} alt='Photo icon' />
                            <PhotoIcon src={Car2} alt='Photo icon' />
                        </PhotoIconsWrapper>
                    </Photo>
                    <Typography variant='h1' >{favoriteItem.name}</Typography>
                </CardHeader>
                <Typography variant='body1'>{favoriteItem.description}</Typography>
                <Actions>
                    <ButtonFavorite onClick={handleClickFavorite}>
                        <Favorite />
                        <Typography variant='button' >Удалить</Typography>
                    </ButtonFavorite>
                    <ButtonRoute onClick={handleClickRoute}>
                        <Geo />
                        <Typography variant='button' >Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
        </CardExpanded>
    )
}