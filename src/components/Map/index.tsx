import { useCallback } from 'react'

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
import { toast } from 'react-toastify';

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

            // const geocoder = new google.maps.Geocoder()

            // const test = {
            //     lat: 9.1805900,
            //     lng: 7.1793900
            // }

            // geocoder.geocode({ location: test }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
            //     if(status !== google.maps.GeocoderStatus.OK || !results || !results.length){
            //         console.log('Нет города, выйди')
            //     }
                
            //     console.log(results)
            //     console.log(results[0].address_components.find(address => address.types.includes('locality'))?.long_name) // UK ебал в рот locality
            //     console.log(results[0].address_components.find(address => address.types.includes('country'))?.long_name)
            // });
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
