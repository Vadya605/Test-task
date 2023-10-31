import { Circle,Marker } from "@react-google-maps/api"

import { CIRCLE_OPTIONS } from "@/constants"
import { useAppDispatch, useTypeSelector } from "@/hooks"
import { setSelectedPlace } from "@/store/reducers"

export default function FoundPlaces() {
    const dispatch = useAppDispatch()

    const {
        Map: { userLocation },
        Search: { foundPlaces, searchRadius }
    } = useTypeSelector(state => state)

    const handleClickMarker = (place: google.maps.places.PlaceResult) => {
        dispatch(setSelectedPlace(place))
    }

    return (
        <>
            <Circle
                center={userLocation}
                radius={searchRadius * 1000}
                options={CIRCLE_OPTIONS}
            />
            {foundPlaces.map((place, index) => (
                <Marker
                    onClick={() => handleClickMarker(place)}
                    key={`${place.place_id}-${index}`}
                    position={place.geometry?.location || {lat: 0, lng: 0}}
                    icon={place.icon}
                />
            ))}
        </>
    )
}