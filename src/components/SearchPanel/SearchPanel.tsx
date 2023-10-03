import { places } from '../../utils/consts'
import Search from '../svg/Search'
import { Box } from '@mui/material'
import { SearchPanelWrapper, Place, Places, PlacesWrapper, RadiusBox, RadiusInput, RadiusLabel, ButtonSearch } from './SearchPanelStyle'
import { useAppDispath, useTypeSelector } from '../../hooks/redux'
import { SearchServices } from '../../store/reducers/'
import React from 'react'

export default function SearchPanel(){
    const dispatch = useAppDispath()
    const {selectedPlaces, searchRadius} = useTypeSelector(state => state.Search)
    const {map} = useTypeSelector(state => state.Map)

    const handleClickPlace = (name: string) => {
        if(!selectedPlaces.includes(name)){
            return dispatch(SearchServices.actions.addSelectedPlace(name))
        }

        return dispatch(SearchServices.actions.removeSelectedPlace(name))
    }

    const handleChangeRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchRadiusValue = e.target.value.replace(/[^0-9]/g, '')
        
        dispatch(SearchServices.actions.setSearchRadius(searchRadiusValue))
    }

    const handleSearch = () => {
        if(!map || !selectedPlaces.length || !searchRadius){
            return console.log('Ввод');
        }
        
        const request = {
            location: map.getCenter(),
            radius: Number(searchRadius) * 1000,
            keyword: selectedPlaces
        };
        
        const placesService = new google.maps.places.PlacesService(map);

        placesService.nearbySearch(request, (results, status) => {     
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                dispatch(SearchServices.actions.setFoundPlaces(results))
            } else {
                dispatch(SearchServices.actions.setFoundPlaces([]))
            }
        });
    };

    return (
        <Box>
            <SearchPanelWrapper>
                <h3>Искать</h3>
                <Places>
                    <PlacesWrapper>
                        { places.map(place => 
                            <Place 
                                key={place.name} 
                                isSelected={selectedPlaces.includes(place.name)} 
                                onClick={() => handleClickPlace(place.name)}
                            >
                                <img src={ place.icon } alt="" />
                                <span>{ place.name }</span>
                            </Place>
                        ) }
                    </PlacesWrapper>
                </Places>
                <h3>В радиусе</h3>
                <RadiusBox>
                    <RadiusInput name='radius' id='radius' value={searchRadius} onChange={handleChangeRadius} />
                    <RadiusLabel>км</RadiusLabel>
                </RadiusBox>
                <ButtonSearch onClick={handleSearch}>
                    <Search />
                </ButtonSearch>
            </SearchPanelWrapper>
        </Box>
    )
}