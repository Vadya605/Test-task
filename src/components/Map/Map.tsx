import React from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapContainerStyle, MapWrapper } from './MapStyle.tsx';
import CurrentLocation from '../CurrentLocation/CurrentLocation.tsx';
import { mapOptions } from '../../utils/consts.ts';
import { useAppDispath, useTypeSelector } from '../../hooks/redux.ts';
import { getBrowserLocation } from '../../utils/geo.ts';
import { MapServices } from '../../store/reducers/'

interface MapProps {
    isLoaded: boolean
}

export default function Map({ isLoaded }: MapProps) {
    const dispatch = useAppDispath()
    const {center} = useTypeSelector(state => state.Map)
    const {foundPlaces} = useTypeSelector(state => state.Search)

    const onLoad = React.useCallback(async function callback(map: google.maps.Map) {
        getBrowserLocation()
            .then((location) => {
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
                            key={`${place.place_id}-${index}`}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                            }}
                            icon={place.icon}
                        />
                    ))}
                    <CurrentLocation position={center} />
                </GoogleMap>
            ) : (
                <p>Мы загружаемся</p>
            )}
        </MapWrapper>
    );
}
