import { useCallback, ChangeEvent } from 'react'

import Typography from '@mui/material/Typography';

import Search from '@/components/svg/Search'
import { PLACES } from '@/constants'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { addFoundPlaces, clearFoundPlaces, setSearchRadius } from '@/store/reducers';
import { AppDispatch } from '@/store/store';

import PlacesPanel from '../PlacesPanel';
import { ButtonSearch, RadiusBox, RadiusInput, SearchPanelWrapper } from './styled'

export default function SearchPanel() {
    const dispatch: AppDispatch = useAppDispatch()
    const {
        Search: { selectedPlaces, searchRadius },
        Map: { map, userLocation }
    } = useTypeSelector(state => state)

    const handleChangeRadius = (e: ChangeEvent<HTMLInputElement>) => {
        const searchRadiusValue = Number(e.target.value.replace(/[^0-9]/g, ''))

        dispatch(setSearchRadius(searchRadiusValue))
    }

    const handleSearch = useCallback(() => {
        dispatch(clearFoundPlaces())

        if (!(map && selectedPlaces.length)) {
            return
        }

        const placesService = new google.maps.places.PlacesService(map);
        const request = {
            location: userLocation,
            radius: (searchRadius * 1000) / 2,
            keyword: ''
        };

        selectedPlaces.forEach(selectedPlace => {
            request.keyword = selectedPlace.toLocaleLowerCase()

            placesService.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    const updatedResults = results.map(result => ({
                        ...result,
                        icon: PLACES.find(p => p.type === selectedPlace)?.icon
                    }));

                    dispatch(addFoundPlaces(updatedResults))
                }
            });
        })
    }, [selectedPlaces, searchRadius, userLocation])

    return (
        <SearchPanelWrapper data-testid='search-panel'>
            <Typography variant='h2'>Искать</Typography>
            <PlacesPanel />
            <Typography variant='h2'>В радиусе</Typography>
            <RadiusBox>
                <RadiusInput name='radius' id='radius' value={searchRadius || ''} onChange={handleChangeRadius} />
                <Typography variant='h3'>км</Typography>
            </RadiusBox>
            <ButtonSearch data-testid='button-search' onClick={handleSearch}>
                <Search />
            </ButtonSearch>
        </SearchPanelWrapper>
    )
}