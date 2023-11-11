import { useCallback } from 'react'
import { toast } from 'react-toastify';

import { GoogleMap, Marker } from "@react-google-maps/api";

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import FoundPlaces from '@/components/FoundPlaces';
import Loader from "@/components/Loader";
import MapControls from '@/components/MapControls';
import RouteDetails from "@/components/RouteDetails";
import { DEFAULT_CENTER, ERRORS, MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useGoogleMaps, useTypeSelector } from '@/hooks';
import { setCenter, setMap, setUserLocation } from '@/store/reducers'
import { getBrowserLocation, getMapStyle } from '@/utils';

import { mapContainerStyle, MapWrapper } from './styled';

export default function Map() {
    const dispatch = useAppDispatch()
    const {
        Map: { center, zoom },
        SelectedPlace: { selectedPlace },
        RouteDetails: { directionsRenderer },
        Mode: { mode },
        AutoCompleteSearch: { resultLocation }
    } = useTypeSelector(state => state)

    const mapStyles = getMapStyle(mode)
    const isLoaded = useGoogleMaps()

    const onLoad = useCallback(async (map: google.maps.Map) => {
        try {

            const location = await getBrowserLocation()
            dispatch(setUserLocation(location))
            dispatch(setCenter(location))
        } catch {
            toast(ERRORS['error-geo'], { type: 'warning' })
            dispatch(setUserLocation(DEFAULT_CENTER))
            dispatch(setCenter(DEFAULT_CENTER))
        } finally {
            dispatch(setMap(map))
        }
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
                        {resultLocation && <Marker position={resultLocation} />}
                        {selectedPlace && <CardPlace />}
                        {directionsRenderer && <RouteDetails />}
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
