import { useCallback } from 'react'
import { toast } from 'react-toastify';

import { GoogleMap, Marker } from "@react-google-maps/api";

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import FoundPlaces from '@/components/FoundPlaces';
import Loader from "@/components/Loader";
import MapControls from '@/components/MapControls';
import RouteDetails from "@/components/RouteDetails";
import { DEFAULT_CENTER, MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useGoogleMaps, useTypeSelector } from '@/hooks';
import { setCenter, setGeographicData, setMap, setUserLocation } from '@/store/reducers'
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
            const {location, city, country} = await getBrowserLocation()
            dispatch(setUserLocation(location))
            dispatch(setCenter(location))
            console.log(city, country)
            dispatch(setGeographicData({ city, country }))
        } catch(error) {
            if(error instanceof Error){
                toast(error.message, { type: 'warning' })
                dispatch(setUserLocation(DEFAULT_CENTER))
                dispatch(setCenter(DEFAULT_CENTER))
            }
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
