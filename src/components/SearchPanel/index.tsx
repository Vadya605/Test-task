import React, { useState } from 'react'
import Typography from '@mui/material/Typography';

import Search from '@/components/svg/Search'
import { PLACES } from '@/constants'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { SearchServices } from '@/store/reducers'

import { ButtonSearch, RadiusBox, RadiusInput, SearchPanelWrapper } from './styled'
import { AppDispatch } from '@/store/store';
import PlacesPanel from '../PlacesPanel';

export default function SearchPanel() {
    const dispatch: AppDispatch = useAppDispatch()
    const { selectedPlaces } = useTypeSelector(state => state.Search)
    const { map, userLocation } = useTypeSelector(state => state.Map)
    // если сразу кидать в redux, то Circle перерисуется, пока умнее не придумал, беда
    const [searchRadius, setSearchRadius] = useState(1)

    const handleChangeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchRadiusValue = Number(e.target.value.replace(/[^0-9]/g, ''))

        setSearchRadius(searchRadiusValue)
    }

    const handleSearch = () => {
        dispatch(SearchServices.actions.clearFoundPlaces())

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
                        icon: PLACES.find(p => p.name === selectedPlace)?.icon
                    }));

                    dispatch(SearchServices.actions.addFoundPlaces(updatedResults))
                }
            });
        })

        dispatch(SearchServices.actions.setSearchRadius(searchRadius))
    };

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