import React from 'react'
import { GoogleMap, Marker, InfoWindow, DirectionsRenderer } from "@react-google-maps/api";
import { mapContainerStyle, MapWrapper } from './MapStyle.tsx';
import CurrentLocation from '../CurrentLocation/CurrentLocation.tsx';
import { mapOptions } from '../../utils/consts.ts';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux.ts';
import { getBrowserLocation } from '../../utils/geo.ts';
import { MapServices } from '../../store/reducers/'
import CardPlace from '../CardPlace/CardPlace.tsx';
import { SelectedPlaceServices } from '../../store/reducers/SelectedPlaceSlice.ts';
import { RouteServices } from '../../store/reducers/DirectionsRendererSlice.ts';

interface MapProps {
    isLoaded: boolean
}

export default function Map({ isLoaded }: MapProps) {
    const dispatch = useAppDispatch()
    const { center, map } = useTypeSelector(state => state.Map)
    const { foundPlaces } = useTypeSelector(state => state.Search)
    const {selectedPlace} = useTypeSelector(state => state.SelectedPlace)
    const {directionsRenderer} = useTypeSelector(state => state.DirectionsRenderer)

    console.log('Route', directionsRenderer)
    directionsRenderer && directionsRenderer.getDirections()

    const onLoad = React.useCallback(async function callback(map: google.maps.Map) {
        getBrowserLocation()
            .then((location) => {
                console.log(location)
                dispatch(MapServices.actions.setCenter(location))
            })
            .catch((defaultLocation) => {
                dispatch(MapServices.actions.setCenter(defaultLocation))
            }).finally(() => {
                dispatch(MapServices.actions.setMap(map))
            })
    }, [])

    const onUnmount = React.useCallback(function callback() {
        dispatch(MapServices.actions.setMap(null))
    }, [])

    const handleClickMarker = (place: google.maps.places.PlaceResult) => {
        dispatch(SelectedPlaceServices.actions.setSelected(place))
    } 

    const handleCloseInfoWindow = () => {
        dispatch(SelectedPlaceServices.actions.setSelected(null))
    }

    return (
        <MapWrapper>
            {isLoaded ? (
                <GoogleMap
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={mapOptions}
                >
                    {foundPlaces && foundPlaces.map((place, index) => (
                        <Marker
                            onClick={() => handleClickMarker(place)}
                            key={`${place.place_id}-${index}`}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                            }}
                            icon={place.icon}
                        />
                    ))}
                    {selectedPlace && <CardPlace place={selectedPlace} />}
                    {/* { directionsRenderer && <DirectionsRenderer directions={directionsRenderer.getDirections() || undefined} />} */}
                    <CurrentLocation position={center} />
                </GoogleMap>
            ) : (
                <p>Мы загружаемся</p>
            )}
        </MapWrapper>
    );
}
