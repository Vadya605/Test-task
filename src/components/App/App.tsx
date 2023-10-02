import React from 'react'
import SideBar from '../SideBar/SideBar'
import Map from '../Map/Map'
import { ContainerApp } from './AppStyle'
import { useJsApiLoader, Libraries } from "@react-google-maps/api";

function App() {
    const libraries: Libraries = ['places']

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        libraries: libraries
    }); // куда

    return (
        <ContainerApp>
            <SideBar isLoaded={isLoaded} />
            <Map isLoaded={isLoaded} />
        </ContainerApp>
    )
}

export default App
