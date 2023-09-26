import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardFavoriteStyle from './CardFavoriteStyle';
import Car from '../../../assets/img/icons-markers/car1.svg'
import Car2 from '../../../assets/img/icons-markers/car2.svg'
import ExpandedActions from './ExpandedActions/ExpandedActions';
import CollapsedActions from './CollapsedActions/CollapsedActions';

interface CardFavoriteProps{
  favoriteItem: {
    id:number, 
    name: string, 
    description: string,
  }
}

const strLimit = (str: string, limit: number) => {
    if(str.length <= limit){
        return str
    }

    return str.slice(0, limit) + '...'
}

export default function CardFavorite({ favoriteItem }: CardFavoriteProps) {
  const [expanded, setExpanded] = useState(false);
  const CardStyle = CardFavoriteStyle()

  return (
    <Card className={CardStyle.classes.card}>
      <CardContent className={CardStyle.classes.cardContent}>
        <div className={ expanded? CardStyle.classes.column: CardStyle.classes.row }>
            <div className={CardStyle.classes.photo}>
              <div className={CardStyle.classes.markers}>
                <img className={CardStyle.classes.marker} src={Car} alt="" />
                <img className={CardStyle.classes.marker} src={Car2} alt="" />
              </div>
            </div>
            <span className={CardStyle.classes.title}>{favoriteItem.name}</span>
        </div>
        <p>{expanded? favoriteItem.description: strLimit(favoriteItem.description, 60)}</p>
      </CardContent>
      <CardActions disableSpacing className={CardStyle.classes.cardActions}>
        { expanded? <ExpandedActions />: <CollapsedActions handleClickExpandMore={() => setExpanded(!expanded)} /> }
      </CardActions>
    </Card>
  );
}
