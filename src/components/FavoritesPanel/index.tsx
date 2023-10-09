import { Box } from '@mui/material'

import BackIcon from '@/assets/img/Arrow.svg'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { SelectedFavoriteServices } from "@/store/reducers";
import CollapsedCard from "../CardFavorite/CollapsedCard";
import ExpandedCard from "../CardFavorite/ExpandedCard";
import { HeaderPanel, IconBack } from "./styled";


export default function FavoritesPanel() {
    const dispatch = useAppDispatch()
    const { place_id: selectedFavoriteId } = useTypeSelector(state => state.SelectedFavorite)
    const { favorites } = useTypeSelector(state => state.Favorites)
    const selectedFavorite = favorites.find(item => item.place_id === selectedFavoriteId)

    const handleClickBack = () => {
        dispatch(SelectedFavoriteServices.actions.setSelected(''))
    }

    const renderCollapsedCards = () => {
        return favorites.map(favoriteItem => (
            <CollapsedCard
                favoriteItem={favoriteItem}
                key={favoriteItem.place_id}
            />
        ))
    }

    return (
        <Box>
            <HeaderPanel>
                {selectedFavorite ? <IconBack src={BackIcon} alt='Back' onClick={handleClickBack} /> : null}
                <h3>Избранное</h3>
            </HeaderPanel>
            {
                selectedFavorite ? (
                    <ExpandedCard
                        favoriteItem={selectedFavorite}
                        key={selectedFavorite.place_id}
                    />
                ) : (
                    renderCollapsedCards()
                )
            }
        </Box>
    )
}