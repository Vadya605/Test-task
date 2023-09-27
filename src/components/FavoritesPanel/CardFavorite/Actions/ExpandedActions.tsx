import { Actions, ButtonRoute, ButtonSave } from "../Styled/Actions";
import Favorite from '../../../svg/Favorite';
import Geo from "../../../svg/Geo";
export default function ExpandedActions(){
    return (
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
    )
}