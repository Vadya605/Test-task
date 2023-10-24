import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

import BackIcon from '@/assets/img/Arrow.svg'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { SelectedFavoriteServices } from "@/store/reducers";

import CollapsedCard from "../CardFavoriteCollapsed";
import ExpandedCard from "../CardFavoriteExpanded";
import { ButtonBack,HeaderPanel } from "./styled";

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
        <Box data-testid='favorite-panel'>
            <HeaderPanel>
                {selectedFavorite && <ButtonBack data-testid='button-back' onClick={handleClickBack}><img src={BackIcon} alt='Back' /></ButtonBack>}
                <Typography variant='h2' >Избранное</Typography>
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