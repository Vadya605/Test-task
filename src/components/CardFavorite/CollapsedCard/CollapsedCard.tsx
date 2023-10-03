import { Actions, CardCollapsed, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper } from "./CollapsedCardStyle";
import Car from '../../../assets/img/icons-markers/car-rear.svg'
import Car2 from '../../../assets/img/icons-markers/car-side.svg'
import Favorite from "../../svg/Favorite";
import ExpandMore from '../../../assets/img/Arrow.svg'
import { strLimit } from "../../../utils/textHelpers";
import { IFavorite } from "../../../models/IFavorite";
import { useAppDispath } from "../../../hooks/redux";
import { FavoriteServices } from '../../../store/reducers';


interface CardCollapsedProps {
    favoriteItem: IFavorite
    handleClickExpandMore: () => void
}

export default function CollapsedCard({ favoriteItem, handleClickExpandMore }: CardCollapsedProps){

    const dispatch = useAppDispath()
    
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
                    <button onClick={() => dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))}>
                        <Favorite />
                    </button> 
                    {/* fix */}
                    <img src={ExpandMore} alt="" onClick={handleClickExpandMore} />
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}