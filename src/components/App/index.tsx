import Map from '@/components/Map'
import SideBar from '@/components/SideBar'

import { ContainerApp } from './styled'
import ErrorBoundary from '@/components/ErrorBoundary'
import MapError from '@/components/MapError'
import AuthModal from '../AuthModal'

function App() {
    return (
        <ContainerApp>
            <AuthModal />
            <SideBar />
            <ErrorBoundary fallback={<MapError />}>
                <Map />
            </ErrorBoundary>
        </ContainerApp>
    )
}

export default App