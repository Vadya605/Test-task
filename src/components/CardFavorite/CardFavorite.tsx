import { useState } from 'react';
import Car from '../../assets/img/icons-markers/car1.svg'
import Car2 from '../../assets/img/icons-markers/car2.svg'
import ExpandedActions from './CardActions/ExpandedActions';
import CollapsedActions from './CardActions/CollapsedActions';
import { strLimit } from '../../utils/textHelpers';
import { FavoriteCard, CardHeader, CardWrapper, Photo, PhotoIconsWrapper, PhotoIcon } from './CardFavoriteStyle.tsx';
import { Typography } from '@mui/material';

interface CardFavoriteProps{
  favoriteItem: {
    id:number, 
    name: string, 
    description: string,
  }
}

//как в итоге раскрывать обратно?

export default function CardFavorite({ favoriteItem }: CardFavoriteProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FavoriteCard>
      <CardWrapper>
        <CardHeader isExpanded={expanded}>
          <Photo
              backgroundUrl='./ExamplePhoto.png'
              isExpanded={expanded}
            >
              <PhotoIconsWrapper>
                <PhotoIcon src={Car} isExpanded={expanded} />
                <PhotoIcon src={Car2} isExpanded={expanded} />
              </PhotoIconsWrapper>
            </Photo>
            <span>{ favoriteItem.name }</span>
        </CardHeader>
        <Typography>
          { expanded?favoriteItem.description:strLimit(favoriteItem.description, 100) }
        </Typography>
      { expanded? <ExpandedActions />: <CollapsedActions handleClickExpandMore={() => setExpanded(!expanded)} /> }
      </CardWrapper>
    </FavoriteCard>
  );
}
