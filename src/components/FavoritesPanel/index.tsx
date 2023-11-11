import { useEffect, useState } from 'react';

import { Box, CircularProgress } from '@mui/material'
import Typography from '@mui/material/Typography';

import BackIcon from '@/assets/img/Arrow.svg'
import CollapsedCard from "@/components/CardFavoriteCollapsed";
import ExpandedCard from "@/components/CardFavoriteExpanded";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { setFavorites, setSelectedFavorite } from "@/store/reducers";
import { getFavorites } from '@/utils/favorite';

import { BoxLoader, ButtonBack, HeaderPanel } from "./styled";
import { toast } from 'react-toastify';
import { ERRORS } from '@/constants';

export default function FavoritesPanel() {
    const dispatch = useAppDispatch()

    const {
        SelectedFavorite: { place_id: selectedFavoriteId },
        Favorites: { favorites }
    } = useTypeSelector(state => state)

    const selectedFavorite = favorites.length && favorites.find(item => item.place_id === selectedFavoriteId)
    const { id: userId } = useTypeSelector(state => state.User)

    const [isLoading, setIsLoading] = useState(false)

    const handleClickBack = () => {
        dispatch(setSelectedFavorite(''))
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
        async function fetchFavorites() {
            try {
                setIsLoading(true)

                const favorites = await getFavorites(userId)
                dispatch(setFavorites(favorites))
            } catch {
                toast(ERRORS['error-getting-favorites'], { type: 'error' })
            } finally {
                setIsLoading(false)
            }
        }

        fetchFavorites()
    }, [])

    return (
        <Box data-testid='favorite-panel'>
            <HeaderPanel>
                {
                    selectedFavorite ? (
                        <ButtonBack data-testid='button-back' onClick={handleClickBack}>
                            <img src={BackIcon} alt='Back' />
                        </ButtonBack>
                    ) : null
                }
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