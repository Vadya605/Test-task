import { Button } from "@mui/material";

import ExpandMore from '@/assets/img/Arrow.svg'
import Favorite from '@/assets/img/Favorite.svg'
import Car from '@/assets/img/icons-markers/car-rear.svg'
import Car2 from '@/assets/img/icons-markers/car-side.svg'
import { useAppDispatch } from "@/hooks/redux";
import { IFavorite } from "@/models/IFavorite";
import { FavoriteServices, SelectedFavoriteServices } from '@/store/reducers';
import { strLimit } from "@/utils/textHelpers";

import { Actions, CardCollapsed, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper } from "./styled";


interface CardCollapsedProps {
    favoriteItem: IFavorite
}

export default function CollapsedCard({ favoriteItem }: CardCollapsedProps){
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
                            <PhotoIcon src={Car} />
                            <PhotoIcon src={Car2} />
                        </PhotoIconsWrapper>
                    </Photo>
                    <span>{ favoriteItem.name }</span>
                </CardHeader>
                <p>{  strLimit(favoriteItem.description, 100) }</p>
                <Actions>
                    <Button onClick={handleClickFavorite}>
                        <img src={Favorite} alt="" />
                    </Button> 
                    <Button onClick={handleClickExpandMore}>
                        <img src={ExpandMore} alt="" />
                    </Button>
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}