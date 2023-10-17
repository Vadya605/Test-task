import Typography from '@mui/material/Typography';

import ExpandMore from '@/assets/img/Arrow.svg'
import Favorite from '@/assets/img/Favorite.svg'
import { useAppDispatch } from "@/hooks/redux";
import { FavoriteServices, SelectedFavoriteServices } from '@/store/reducers';
import { strLimit } from "@/utils/textHelpers";

import { CardProps } from "./interfaces";
import { Actions, CardCollapsed, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper, PhotoWrapper } from "./styled";

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
                    <PhotoWrapper>
                        <Photo src={favoriteItem.photo} alt="Photo place" />
                        <PhotoIconsWrapper>
                            <PhotoIcon src={favoriteItem.icon} alt="Photo icon" />
                        </PhotoIconsWrapper>
                    </PhotoWrapper>
                    <Typography variant="h3">{strLimit(favoriteItem.name, 20)}</Typography>
                </CardHeader>
                <Typography variant="body2">{ strLimit(favoriteItem.description, 100) }</Typography>
                <Actions>
                    <img src={Favorite} alt="Favorite" onClick={handleClickFavorite} />
                    <img src={ExpandMore} alt="ExpandMore" onClick={handleClickExpandMore} />
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}