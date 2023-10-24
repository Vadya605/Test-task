import { CIRCLE_OPTIONS } from "@/constants"
import { useAppDispatch, useTypeSelector } from "@/hooks/redux"
import { SelectedPlaceServices } from "@/store/reducers"
import { Circle,Marker } from "@react-google-maps/api"

export default function FoundPlaces() {
    const dispatch = useAppDispatch()
    const {userLocation} = useTypeSelector(state => state.Map)
    const { foundPlaces, searchRadius } = useTypeSelector(state => state.Search)

    const handleClickMarker = (place: google.maps.places.PlaceResult) => {
        dispatch(SelectedPlaceServices.actions.setSelected(place))
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
                    position={{
                        lat: place?.geometry?.location?.lat() || 0,
                        lng: place?.geometry?.location?.lng() || 0,
                    }}
                    icon={place.icon}
                />
            ))}
        </>
    )
}