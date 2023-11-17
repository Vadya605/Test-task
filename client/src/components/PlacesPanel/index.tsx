import { Typography } from '@mui/material'

import { PLACES } from '@/constants'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { addSelectedPlace, removeSelectedPlace } from '@/store/reducers'

import { Place, Places, PlacesWrapper } from './styled'

export default function PlacesPanel() {
    const dispatch = useAppDispatch()
    const {
        Search: { selectedPlaces },
    } = useTypeSelector((state) => state)

    const handleClickPlace = (type: string) => {
        if (!selectedPlaces.includes(type)) {
            return dispatch(addSelectedPlace(type))
        }

        return dispatch(removeSelectedPlace(type))
    }

    return (
        <Places>
            <PlacesWrapper>
                {PLACES.map((place) => (
                    <Place
                        key={place.name}
                        isActive={selectedPlaces.includes(place.type)}
                        onClick={handleClickPlace.bind(null, place.type)}
                    >
                        <img src={place.icon} alt="Place icon" />
                        <Typography variant="h4">{place.name}</Typography>
                    </Place>
                ))}
            </PlacesWrapper>
        </Places>
    )
}
