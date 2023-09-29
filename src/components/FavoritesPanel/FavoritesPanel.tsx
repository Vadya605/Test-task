import { useState } from "react";
import { Box } from '@mui/material'
import CollapsedCard from "../CardFavorite/CollapsedCard/CollapsedCard";
import ExpandedCard from "../CardFavorite/ExpandedCard/ExpandedCard";
import BackIcon from '../../assets/img/Arrow.svg'
import { IconBack, HeaderPanel } from "./FavoritesPanelStyle";

const favorites = [
    {
        id: 1, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 2, 
        name: 'Городской парк',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 3, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 4, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 5, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 6, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 7, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 8, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 9, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
]

export default function FavoritesPanel(){
    const [selectedFavoriteId, setSelectedFavoriteId] = useState<number>()
    
    return(
        <Box>
            <HeaderPanel>
                { selectedFavoriteId? 
                    <IconBack src={BackIcon} onClick={() => setSelectedFavoriteId(undefined)} />
                    :null
                }
                <h3>Избранное</h3>
            </HeaderPanel>
            {
                selectedFavoriteId? 
                    <ExpandedCard
                        favoriteItem={ favorites.find(item => item.id === selectedFavoriteId) }
                        key={selectedFavoriteId}
                    />
                    :favorites.map(favoriteItem => 
                        <CollapsedCard
                            handleClickExpandMore={() => setSelectedFavoriteId(favoriteItem.id)}
                            favoriteItem={ favoriteItem }
                            key={favoriteItem.id}
                        />
                    )
            }
        </Box>
    )
}