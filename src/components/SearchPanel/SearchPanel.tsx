import { useState } from 'react'
import { places } from '../../utils/consts'
import Search from '../svg/Search'
import { Box } from '@mui/material'
import { SearchPanelWrapper, Place, Places, PlacesWrapper, RadiusBox, RadiusInput, RadiusLabel, ButtonSearch } from './SearchPanelStyle'

export default function SearchPanel(){
    const [selectedPlaces, setSelectedPlaces] = useState<string[]>([])

    const handleClickPlace = (name: string) => {
        if(selectedPlaces.includes(name)){
            return setSelectedPlaces(
                selectedPlaces.filter(place => place !== name)
            )
        }

        return setSelectedPlaces([
            ...selectedPlaces,
            name
        ])
    }

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
                    <RadiusInput name='radius' id='radius' />
                    <RadiusLabel>км</RadiusLabel>
                </RadiusBox>
                <ButtonSearch>
                    <Search />
                </ButtonSearch>
            </SearchPanelWrapper>
        </Box>
    )
}