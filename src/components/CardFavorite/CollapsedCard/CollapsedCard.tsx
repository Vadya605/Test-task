import { Actions, CardCollapsed, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper } from "./CollapsedCardStyle";
import Car from '../../../assets/img/icons-markers/car1.svg'
import Car2 from '../../../assets/img/icons-markers/car2.svg'
import { Typography } from "@mui/material";
// import Favorite from '../../../assets/img/side-bar/Favorites/Favorites.svg'
import Favorite from "../../svg/Favorite";
import ExpandMore from '../../../assets/img/Arrow.svg'
import { strLimit } from "../../../utils/textHelpers";

interface CardCollapsedProps {
    favoriteItem: {
        id:number, 
        name: string, 
        description: string,
    },
    handleClickExpandMore: () => void
}

export default function CollapsedCard({ favoriteItem, handleClickExpandMore }: CardCollapsedProps){
    return (
        <CardCollapsed>
            <CardWrapper>
                <CardHeader>
                    <Photo backgroundUrl="/ExamplePhoto.png" >
                        <PhotoIconsWrapper>
                            <PhotoIcon src={Car} />
                            <PhotoIcon src={Car2} />
                        </PhotoIconsWrapper>
                    </Photo>
                    <span>{ favoriteItem.name }</span>
                </CardHeader>
                <p>{  strLimit(favoriteItem.description, 100) }</p>
                <Actions>
                    {/* <img src={Favorite} alt="" /> */}
                    <Favorite />
                    <img src={ExpandMore} alt="" onClick={handleClickExpandMore} />
                </Actions>
            </CardWrapper>
        </CardCollapsed>
    )
}