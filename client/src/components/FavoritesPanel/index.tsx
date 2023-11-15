import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Box, CircularProgress } from '@mui/material'
import Typography from '@mui/material/Typography';

import BackIcon from '@/assets/img/Arrow.svg'
import ExpandedCard from "@/components/CardExpanded";
import { ERRORS } from '@/constants';
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { setFavorites, setSelectedFavorite } from "@/store/reducers";
import { getFavorites } from '@/utils/favorite';

import { BoxLoader, ButtonBack, HeaderPanel } from "./styled";
import ListCollapsedCard from '../ListCollapsedCard';

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
                            cardItem={selectedFavorite}
                            key={selectedFavorite.place_id}
                        />
                    ) : (
                        <ListCollapsedCard />
                    )
                ) : (
                    <BoxLoader><CircularProgress color='primary' /></BoxLoader>
                )
            }
        </Box>
    )
}