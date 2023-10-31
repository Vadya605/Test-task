import { useCallback } from 'react'

import { GoogleMap } from "@react-google-maps/api";

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import FoundPlaces from '@/components/FoundPlaces';
import Loader from "@/components/Loader";
import MapControls from '@/components/MapControls';
import RouteDetails from "@/components/RouteDetails";
import { MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useGoogleMaps,useTypeSelector } from '@/hooks';
import { setCenter, setMap, setUserLocation } from '@/store/reducers'
import { getBrowserLocation, getMapStyle } from '@/utils';

import { mapContainerStyle, MapWrapper } from './styled';

export default function Map() {
    const dispatch = useAppDispatch()
    const {
        Map: { center, zoom },
        SelectedPlace: { selectedPlace },
        RouteDetails: { directionsRenderer },
        Mode: { mode }
    } = useTypeSelector(state => state)

    const mapStyles = getMapStyle(mode)
    const isLoaded = useGoogleMaps()

    const onLoad = useCallback(async (map: google.maps.Map) => {
        getBrowserLocation()
            .then((location) => {
                dispatch(setUserLocation(location))
                dispatch(setCenter(location))
            })
            .catch((defaultLocation) => {
                dispatch(setUserLocation(defaultLocation))
                dispatch(setCenter(defaultLocation))
            }).finally(() => {
                dispatch(setMap(map))
            })
    }, [dispatch])

    return (
        <>
            <MapWrapper>
                {isLoaded ? (
                    <GoogleMap
                        onLoad={onLoad}
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={zoom}
                        options={{ ...MAP_OPTIONS, styles: mapStyles }}
                    >
                        <FoundPlaces />
                        {selectedPlace && <CardPlace />}
                        { directionsRenderer && <RouteDetails /> }
                        <CurrentLocation />
                        <MapControls />
                    </GoogleMap>
                ) : (
                    <Loader />
                )}
            </MapWrapper>
        </>
    );
}
