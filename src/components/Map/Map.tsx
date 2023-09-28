import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { mapContainerStyle, MapWrapper } from './StyledMap';

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
    });

    const center = {
        lat: -34.397,
        lng: 150.644
    };

    return (
        <MapWrapper className='map-wrapper'>
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
