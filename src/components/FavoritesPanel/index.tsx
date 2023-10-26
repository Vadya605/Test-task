import { Box, CircularProgress } from '@mui/material'
import Typography from '@mui/material/Typography';

import { useEffect, useState } from 'react';
import BackIcon from '@/assets/img/Arrow.svg'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { FavoriteServices, SelectedFavoriteServices } from "@/store/reducers";

import CollapsedCard from "../CardFavoriteCollapsed";
import ExpandedCard from "../CardFavoriteExpanded";
import { BoxLoader, ButtonBack, HeaderPanel } from "./styled";
import { getFavorites } from '@/utils/favorite';

export default function FavoritesPanel() {
    const dispatch = useAppDispatch()
    const { place_id: selectedFavoriteId } = useTypeSelector(state => state.SelectedFavorite)
    const { favorites } = useTypeSelector(state => state.Favorites)

    const selectedFavorite = favorites.length && favorites.find(item => item.place_id === selectedFavoriteId)
    const { id: userId } = useTypeSelector(state => state.User)

    const [isLoading, setIsLoading] = useState(true)

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


    useEffect(() => {
        setIsLoading(true)

        getFavorites(userId)
            .then((favorites) => {
                dispatch(FavoriteServices.actions.setFavorites(favorites))
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))

    }, [favorites])

    return (
        <Box data-testid='favorite-panel'>
            <HeaderPanel>
                {selectedFavorite && <ButtonBack data-testid='button-back' onClick={handleClickBack}><img src={BackIcon} alt='Back' /></ButtonBack>}
                <Typography variant='h2'>Избранное</Typography>
            </HeaderPanel>
            {
                !isLoading ? (
                    selectedFavorite ? (
                        <ExpandedCard
                            favoriteItem={selectedFavorite}
                            key={selectedFavorite.place_id}
                        />
                    ) : (
                        renderCollapsedCards()
                    )
                ) : (
                    <BoxLoader><CircularProgress color='primary' /></BoxLoader>
                )
            }
        </Box>
    )
}