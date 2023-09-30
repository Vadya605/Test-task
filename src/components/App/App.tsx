import SideBar from '../SideBar/SideBar'
import React from 'react'
import Map from '../Map/Map'
import { ContainerApp } from './AppStyle'
import { useJsApiLoader, Libraries } from "@react-google-maps/api";
import { defaultCenter } from '../../utils/consts';
import { getBrowserLocation } from '../../utils/geo';

function App() {
    React.useEffect(() => {
        getBrowserLocation()
            .then((location) => {
                setCenter(location);
            })
            .catch((defaultLocation) => {
                setCenter(defaultLocation);
            });
    }, []);
    
    const libraries: Libraries = ['places']
    const [center, setCenter] = React.useState(defaultCenter)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        libraries: libraries
    });

    return (
        <ContainerApp>
            <SideBar isLoaded={isLoaded} />
            <Map isLoaded={isLoaded} center={center} />
        </ContainerApp>
    )
}

export default App
