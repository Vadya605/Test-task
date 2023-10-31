import Typography from '@mui/material/Typography';

import ExpandMore from '@/assets/img/Arrow.svg'
import Favorite from '@/assets/img/Favorite.svg'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { setSelectedFavorite, removeFavorite } from '@/store/reducers';
import { strLimit } from "@/utils/textHelpers";

import { ICardProps } from "./interfaces";
import {
    Actions,
    ButtonAction,
    CardCollapsed,
    CardHeader,
    CardWrapper,
    Photo,
    PhotoIcon,
    PhotoIconsWrapper,
    PhotoWrapper
} from "./styled";
import { deleteFavorite } from '@/utils/favorite';

export default function CollapsedCard({ favoriteItem }: ICardProps) {
    const dispatch = useAppDispatch()
    const { User: { id: userId } } = useTypeSelector(state => state)

    const handleClickExpandMore = () => {
        dispatch(setSelectedFavorite(favoriteItem.place_id))
    }

    const handleClickRemove = () => {
        return deleteFavorite(userId, favoriteItem.place_id)
            .then(() => {
                dispatch(removeFavorite(favoriteItem))
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