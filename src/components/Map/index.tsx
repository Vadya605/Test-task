import { useCallback } from 'react'
import { GoogleMap } from "@react-google-maps/api";

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import { MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useTypeSelector, useGoogleMaps } from '@/hooks';
import { setCenter, setMap, setUserLocation } from '@/store/reducers'
import { getBrowserLocation, getMapStyle } from '@/utils';

import FoundPlaces from '../FoundPlaces';
import Loader from "../Loader";
import MapControls from '../MapControls';
import RouteDetails from "../RouteDetails";
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
    }, [])

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
