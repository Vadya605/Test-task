import { useCallback } from 'react'
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";

import CardPlace from '@/components/CardPlace';
import CurrentLocation from '@/components/CurrentLocation';
import { CIRCLE_OPTIONS, MAP_OPTIONS } from '@/constants';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux.ts';
import { useGoogleMaps } from '@/hooks/useGoogleMaps.ts';
import { MapServices, SelectedPlaceServices } from '@/store/reducers'
import { getBrowserLocation } from '@/utils/geo.ts';

import Loader from "../Loader";
import RouteDetails from "../RouteDetails";
import Plus from '@/assets/img/map-btn/plus.svg'
import Minus from '@/assets/img/map-btn/minus.svg'
import Delimeter from '@/assets/img/map-btn/del.svg'
import Location from '@/assets/img/map-btn/location.svg'
import { mapContainerStyle, MapWrapper, ButtonsControl, ButtonsZoom, ButtonZoom, ButtonLocation } from './styled';

export default function Map() {
    const dispatch = useAppDispatch()
    const { center, userLocation, zoom } = useTypeSelector(state => state.Map)

    const { foundPlaces, searchRadius } = useTypeSelector(state => state.Search)
    const { selectedPlace } = useTypeSelector(state => state.SelectedPlace)
    const { directionsRenderer } = useTypeSelector(state => state.DirectionsRenderer)
    const isLoaded = useGoogleMaps()

    const onLoad = useCallback(async function callback(map: google.maps.Map) {
        getBrowserLocation()
            .then((location) => {
                dispatch(MapServices.actions.setUserLocation(location))
                dispatch(MapServices.actions.setCenter(location))
            })
            .catch((defaultLocation) => {
                dispatch(MapServices.actions.setUserLocation(defaultLocation))
                dispatch(MapServices.actions.setCenter(defaultLocation))
            }).finally(() => {
                dispatch(MapServices.actions.setMap(map))
            })
    }, [])

    const onUnmount = useCallback(function callback() {
        dispatch(MapServices.actions.setMap(null))
    }, [])

    const handleClickMarker = (place: google.maps.places.PlaceResult) => {
        dispatch(SelectedPlaceServices.actions.setSelected(place))
    }

    const handleClickZoom = (value: number) => {
        dispatch(MapServices.actions.setZoom(zoom + value))
    }

    const handleClickLocation = () => {
        dispatch(MapServices.actions.setCenter(userLocation))
    }

    return (
        <MapWrapper>
            {isLoaded ? (
                <GoogleMap
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={zoom}
                    options={MAP_OPTIONS}
                >
                    {foundPlaces.length && <Circle
                        center={userLocation}
                        radius={searchRadius * 1000}
                        options={CIRCLE_OPTIONS}
                    />}
                    {foundPlaces && foundPlaces.map((place, index) => (
                        <Marker
                            onClick={() => handleClickMarker(place)}
                            key={`${place.place_id}-${index}`}
                            position={{
                                lat: place?.geometry?.location?.lat() || 0,
                                lng: place?.geometry?.location?.lng() || 0,
                            }}
                            icon={place.icon}
                        />
                    ))}
                    {selectedPlace && <CardPlace place={selectedPlace} />}
                    {directionsRenderer && <RouteDetails />}
                    <CurrentLocation />
                    <ButtonsControl>
                        <ButtonLocation onClick={handleClickLocation}>
                            <img src={Location} alt="Location" />
                        </ButtonLocation>
                        <ButtonsZoom>
                            <ButtonZoom onClick={() => handleClickZoom(1)}>
                                <img src={Plus} alt="Plus" />
                            </ButtonZoom>
                            <img src={Delimeter} alt="Delimeter" />
                            <ButtonZoom onClick={() => handleClickZoom(-1)}>
                                <img src={Minus} alt="Minus" />
                            </ButtonZoom>
                        </ButtonsZoom>
                    </ButtonsControl>
                </GoogleMap>
            ) : (
                <Loader />
            )}
        </MapWrapper>
    );
}
