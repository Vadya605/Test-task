import React from 'react'
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapContainerStyle, MapWrapper } from './MapStyle.tsx';

interface MapProps {
    center: {
        lat: number,
        lng: number
    },
    isLoaded: boolean
}

export default function Map({ center, isLoaded }: MapProps) {
    
    const mapRef = React.useRef<google.maps.Map | null>(null)

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback() {
        mapRef.current = null
    }, [])

    return (
        <MapWrapper>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={8}
                >
                    <Marker position={center} />
                </GoogleMap>
            ) : (
                <p>Loading...</p>
            )}
        </MapWrapper>
    );
}
