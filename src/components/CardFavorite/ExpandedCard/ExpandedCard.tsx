import { Actions, CardExpanded, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper, ButtonRoute, ButtonSave } from "./ExpandedCardStyle";
import Car from '../../../assets/img/icons-markers/car1.svg'
import Car2 from '../../../assets/img/icons-markers/car2.svg'
import Favorite from "../../svg/Favorite";
import Geo from "../../svg/Geo";

interface ExpandedCardProps {
    favoriteItem: {
        id:number, 
        name: string, 
        description: string,
    },
}

export default function ExpandedCard({ favoriteItem }: ExpandedCardProps){
    return (
        <CardExpanded>
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
                <p>{  favoriteItem.description }</p>
                <Actions>
                    <ButtonSave>
                        <Favorite/>
                        <span>Сохранено</span>
                    </ButtonSave>
                    <ButtonRoute>
                        <Geo />
                        <span>Маршрут</span>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
    </CardExpanded>
    )
}