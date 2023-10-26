import Typography from '@mui/material/Typography';

import ExpandMore from '@/assets/img/Arrow.svg'
import Favorite from '@/assets/img/Favorite.svg'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { FavoriteServices, SelectedFavoriteServices } from '@/store/reducers';
import { strLimit } from "@/utils/textHelpers";

import { CardProps } from "./interfaces";
import { Actions, ButtonAction, CardCollapsed, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper, PhotoWrapper } from "./styled";
import { removeFavorite } from '@/utils/favorite';

export default function CollapsedCard({ favoriteItem }: CardProps) {
    const dispatch = useAppDispatch()
    const { id: userId } = useTypeSelector(state => state.User)

    const handleClickExpandMore = () => {
        dispatch(SelectedFavoriteServices.actions.setSelected(favoriteItem.place_id))
    }

    const handleClickRemove = () => {
        return removeFavorite(userId, favoriteItem.place_id)
            .then(() => {
                dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))
            })
            .catch(err => console.log(err))
    }

    return (
        <CardCollapsed data-testid='card-collapsed'>
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
                <Typography variant="body2">{strLimit(favoriteItem.description, 100)}</Typography>
                <Actions>
                    <ButtonAction data-testid='button-remove' onClick={handleClickRemove}>
                        <img src={Favorite} alt="Favorite" />
                    </ButtonAction>
                    <ButtonAction data-testid='button-expand' onClick={handleClickExpandMore}>
                        <img src={ExpandMore} alt="ExpandMore" />
                    </ButtonAction>
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}