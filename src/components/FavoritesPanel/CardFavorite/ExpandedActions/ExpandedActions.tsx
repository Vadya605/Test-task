import ExpandedActionsStyle from "./ExpandedActionsStyle"
import Geo from '../../../../assets/img/Geo.svg'
import Favorite from '../../../../assets/img/side-bar/Favorites/Favorites.svg';

export default function ExpandedActions(){
    const ActionsStyle = ExpandedActionsStyle()
    
    return (
        <div className={ActionsStyle.classes.expandedActions}>
            <div className={ActionsStyle.classes.save}>
                <img src={Favorite} alt="" />
                <span>Сохранено</span>
            </div>
            <div className={ActionsStyle.classes.route}>
                <img src={Geo} alt="" />
                <span>Маршрут</span>
            </div>
        </div>
    )
}