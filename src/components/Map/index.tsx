import { GoogleMap, Marker } from "@react-google-maps/api";
import React from 'react'

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import { MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux.ts';
import { useGoogleMaps } from '@/hooks/useGoogleMaps.ts';
import { MapServices, SelectedPlaceServices } from '@/store/reducers'
import { getBrowserLocation } from '@/utils/geo.ts';

import { mapContainerStyle, MapWrapper } from './styled';

export default function Map() {
    const dispatch = useAppDispatch()
    const { center } = useTypeSelector(state => state.Map)
    const { foundPlaces } = useTypeSelector(state => state.Search)
    const {selectedPlace} = useTypeSelector(state => state.SelectedPlace)
    const isLoaded = useGoogleMaps()

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

    return (
        <MapWrapper>
            {isLoaded ? (
                <GoogleMap
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={MAP_OPTIONS}
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
