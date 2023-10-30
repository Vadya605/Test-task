import { useCallback } from 'react'

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import { MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux.ts';
import { useGoogleMaps } from '@/hooks/useGoogleMaps.ts';
import { setCenter, setMap, setUserLocation } from '@/store/reducers'
import { getBrowserLocation } from '@/utils/geo.ts';
import { GoogleMap } from "@react-google-maps/api";

import FoundPlaces from '../FoundPlaces';
import Loader from "../Loader";
import MapControls from '../MapControls';
import RouteDetails from "../RouteDetails";
import { mapContainerStyle, MapWrapper } from './styled';
import { getMapStyle } from '@/utils/getMapStyle';

export default function Map() {
    const dispatch = useAppDispatch()
    const { center, zoom } = useTypeSelector(state => state.Map)
    const { selectedPlace } = useTypeSelector(state => state.SelectedPlace)
    const { directionsRenderer } = useTypeSelector(state => state.DirectionsRenderer)
    const { mode } = useTypeSelector(state => state.Mode)

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
                        {selectedPlace && <CardPlace place={selectedPlace} />}
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
