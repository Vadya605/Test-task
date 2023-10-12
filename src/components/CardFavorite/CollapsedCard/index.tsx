import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';

import ExpandMore from '@/assets/img/Arrow.svg'
import Favorite from '@/assets/img/Favorite.svg'
import Car from '@/assets/img/icons-markers/car-rear.svg'
import Car2 from '@/assets/img/icons-markers/car-side.svg'
import { useAppDispatch } from "@/hooks/redux";
import { FavoriteServices, SelectedFavoriteServices } from '@/store/reducers';
import { strLimit } from "@/utils/textHelpers";

import { CardProps } from "../interface";
import { Actions, CardCollapsed, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper } from "./styled";

export default function CollapsedCard({ favoriteItem }: CardProps){
    const dispatch = useAppDispatch()

    const handleClickExpandMore = () => {
        dispatch(SelectedFavoriteServices.actions.setSelected(favoriteItem.place_id))
    }

    const handleClickFavorite = () => {
        dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))
    }
    
    return (
        <CardCollapsed>
            <CardWrapper>
                <CardHeader>
                    <Photo backgroundUrl={favoriteItem.photo} >
                        <PhotoIconsWrapper>
                            <PhotoIcon src={Car} alt="Photo icon" />
                            <PhotoIcon src={Car2} alt="Photo icon" />
                        </PhotoIconsWrapper>
                    </Photo>
                    <Typography variant="h3">{favoriteItem.name}</Typography>
                </CardHeader>
                <Typography variant="body2">{ strLimit(favoriteItem.description, 100) }</Typography>
                <Actions>
                    <Button onClick={handleClickFavorite}>
                        <img src={Favorite} alt="Favorite" />
                    </Button> 
                    <Button onClick={handleClickExpandMore}>
                        <img src={ExpandMore} alt="ExpandMore" />
                    </Button>
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}