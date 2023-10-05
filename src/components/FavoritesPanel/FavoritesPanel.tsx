import { Box } from '@mui/material'
import CollapsedCard from "../CardFavorite/CollapsedCard/CollapsedCard";
import ExpandedCard from "../CardFavorite/ExpandedCard/ExpandedCard";
import BackIcon from '../../assets/img/Arrow.svg'
import { IconBack, HeaderPanel } from "./FavoritesPanelStyle";
import { useAppDispath, useTypeSelector } from "../../hooks/redux";
import { SelectedFavoriteServices } from "../../store/reducers";


export default function FavoritesPanel(){
    const dispatch = useAppDispath()
    const {place_id: selectedFavoriteId} = useTypeSelector(state => state.SelectedFavorite)
    const {favorites} = useTypeSelector(state => state.Favorites)
    
    return(
        <Box>
            <HeaderPanel>
                { selectedFavoriteId? 
                    <IconBack src={BackIcon} onClick={() => dispatch(SelectedFavoriteServices.actions.setSelected(null))} />
                    :null
                }
                <h3>Избранное</h3>
            </HeaderPanel>
            {
                selectedFavoriteId? 
                    <ExpandedCard
                        favoriteItem={ favorites.find(item => item.place_id === selectedFavoriteId) }
                        key={selectedFavoriteId}
                    />
                    :favorites.map(favoriteItem => 
                        <CollapsedCard
                            handleClickExpandMore={() => dispatch(SelectedFavoriteServices.actions.setSelected(favoriteItem.place_id))}
                            favoriteItem={ favoriteItem }
                            key={favoriteItem.place_id}
                        />
                    )
            }
        </Box>
    )
}