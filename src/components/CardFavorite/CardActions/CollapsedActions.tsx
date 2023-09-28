import Favorite from '../../../assets/img/side-bar/Favorites/Favorites.svg'
import ExpandMoreIcon from '../../../assets/img/Arrow.svg'
import { Actions } from '../CardFavoriteStyle';

interface CollapsedActionsProps{
    handleClickExpandMore: () => void
}

export default function CollapsedActions({handleClickExpandMore}: CollapsedActionsProps){

    return (
        <Actions>
            <img src={Favorite} alt="" />
            <img src={ExpandMoreIcon} alt="" onClick={handleClickExpandMore} />
        </Actions>
    )
}