import { Typography } from '@mui/material'
import { Places, PlacesWrapper, Place } from "./styled"
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { PLACES } from '@/constants'
import { SearchServices } from '@/store/reducers'

export default function PlacesPanel() {

    const dispatch = useAppDispatch()
    const {selectedPlaces} = useTypeSelector(state => state.Search)


    const handleClickPlace = (name: string) => {
        if (!selectedPlaces.includes(name)) {
            return dispatch(SearchServices.actions.addSelectedPlace(name))
        }

        return dispatch(SearchServices.actions.removeSelectedPlace(name))
    }

    return (
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
    )
}