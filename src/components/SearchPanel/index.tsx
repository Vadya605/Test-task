import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import React from 'react'

import Search from '@/components/svg/Search'
import { PLACES } from '@/constants'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { SearchServices } from '@/store/reducers'

import { ButtonSearch,Place, Places, PlacesWrapper, RadiusBox, RadiusInput, SearchPanelWrapper } from './styled'
import { AppDispatch } from '@/store/store';

export default function SearchPanel() {
    const dispatch: AppDispatch = useAppDispatch()
    const { selectedPlaces, searchRadius } = useTypeSelector(state => state.Search)
    const { map } = useTypeSelector(state => state.Map)

    const handleClickPlace = (name: string) => {
        if (!selectedPlaces.includes(name)) {
            return dispatch(SearchServices.actions.addSelectedPlace(name))
        }

        return dispatch(SearchServices.actions.removeSelectedPlace(name))
    }

    const handleChangeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchRadiusValue = e.target.value.replace(/[^0-9]/g, '')

        dispatch(SearchServices.actions.setSearchRadius(searchRadiusValue))
    }

    // const isSearchable = () => map && Number(searchRadius) && selectedPlaces.length

    const handleSearch = () => {
        // if(!isSearchable()){
        //     return dispatch(SearchServices.actions.clearFoundPlaces())
        // }

        if(!(map && Number(searchRadius) && selectedPlaces.length)){
            return dispatch(SearchServices.actions.clearFoundPlaces())
        }

        const placesService = new google.maps.places.PlacesService(map);
        const request = {
            location: map.getCenter(),
            radius: Number(searchRadius) * 1000,
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
    };

    return (
        <Box>
            <SearchPanelWrapper>
                <Typography variant='h2'>Искать</Typography>
                <Places>
                    <PlacesWrapper>
                        {PLACES.map(place =>
                            <Place
                                key={place.name}
                                isSelected={selectedPlaces.includes(place.name)}
                                onClick={() => handleClickPlace(place.name)}
                            >
                                <img src={place.icon} alt="Place icon" />
                                <Typography variant='h4'>{place.name}</Typography>
                            </Place>
                        )}
                    </PlacesWrapper>
                </Places>
                <Typography variant='h2'>В радиусе</Typography>
                <RadiusBox>
                    <RadiusInput name='radius' id='radius' value={searchRadius} onChange={handleChangeRadius} />
                    <Typography variant='h3'>км</Typography>
                </RadiusBox>
                <ButtonSearch onClick={handleSearch}>
                    <Search />
                </ButtonSearch>
            </SearchPanelWrapper>
        </Box>
    )
}