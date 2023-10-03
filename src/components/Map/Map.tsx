import React from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapContainerStyle, MapWrapper } from './MapStyle.tsx';
import CurrentLocation from '../CurrentLocation/CurrentLocation.tsx';
import { mapOptions } from '../../utils/consts.ts';
import CurrentLocationIcon from '../../assets/img/CurrentLocation.svg'
import { useAppDispath, useTypeSelector } from '../../hooks/redux.ts';
import { getBrowserLocation } from '../../utils/geo.ts';
import { MapServices } from '../../store/reducers/'

interface MapProps {
    isLoaded: boolean
}

export default function Map({ isLoaded }: MapProps) {
    const dispatch = useAppDispath()
    const {center, map} = useTypeSelector(state => state.Map)
    const {foundPlaces} = useTypeSelector(state => state.Search)

    if(foundPlaces.length){
        console.log(foundPlaces);
        
    }

    const onLoad = React.useCallback(async function callback(map: google.maps.Map) {
        getBrowserLocation()
            .then((location) => {
                dispatch(MapServices.actions.setCenter(location))
            })
            .catch((defaultLocation) => {
                dispatch(MapServices.actions.setCenter(defaultLocation))
            });
        dispatch(MapServices.actions.setMap(map))
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
                    {foundPlaces && foundPlaces.map((place) => (
                        <Marker
                            key={place.place_id}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                            }}
                            // icon={CurrentLocationIcon}
                            title={place.name}
                        />
                    ))}
                    <CurrentLocation position={center} />
                </GoogleMap>
            ) : (
                <p>Loading...</p>
            )}
        </MapWrapper>
    );
}
