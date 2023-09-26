import Favorite from '../../../../assets/img/side-bar/Favorites/Favorites.svg';
import ExpandMoreIcon from '../../../../assets/img/Arrow.svg'
import CollapsedActionsStyle from './CollapsedActionsStyle';

interface CollapsedActionsProps{
    handleClickExpandMore: () => void
}

export default function CollapsedActions({handleClickExpandMore}: CollapsedActionsProps){
    const ActionsStyle = CollapsedActionsStyle()

    return (
        <div className={ActionsStyle.classes.collapsedActions}>
            <img src={Favorite} alt="" />
            <img src={ExpandMoreIcon} alt="" onClick={handleClickExpandMore} />
        </div>
    )
}